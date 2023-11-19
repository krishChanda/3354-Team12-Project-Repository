package api

import (
	"AmazonAPI/pkg/types"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"log"
	"net/http"
)

var links = []types.Url{}

func Handler(link string) (*types.Product) {

	reviews, product := RunAmazonAPI(link)
	keywords, err := OpenAIAPI(reviews)

	if err != nil {
		log.Fatal("Error getting keywords. ", err)
	}

	// ensures that the server only has one link at a time
	ResetLinks()
	product.Keywords = keywords

	return product

}

func GetLink(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, links)
}

func AddLink(context *gin.Context) {
	var link types.Url
	if err := context.Bind(&link); err != nil {
		return
	}
	// runs amazon api and openai api then returns keywords
	links = append(links, link)
	product := Handler(link.Url)

	context.JSON(http.StatusCreated, product)

}

func PostKeywords(context *gin.Context) {
	var keywords []string
	if err := context.Bind(&keywords); err != nil {
		return
	}
	context.IndentedJSON(http.StatusCreated, keywords)
}

func RunAmazonAPI(link string) ([]string, *types.Product) {
	var product types.Product
	product.Asin = ParseLink(link)[1]
	product.Title = ParseLink(link)[0]
	productReview, err := GetAmazonProductReviews(&product)

	if err != nil {
		log.Fatal("Error getting amazon reviews. ", err)
	}

	reviews := ParseProductReviews(productReview)
	return reviews, &product
}

func ResetLinks() {
	links = []types.Url{}
}

func GetUrl() types.Url {
	return links[len(links)-1]
}

func LoadEnv() {
	// Load .env file, sets automatically if it exists
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file", err)
	}
}
