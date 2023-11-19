package api

import (
	"regexp"
	"net/http"
	"io"
	"AmazonAPI/pkg/types"
	"fmt"
	"github.com/joho/godotenv"
	"log"
	"os"
)


func ParseLink(link string) []string {
	r, _ := regexp.Compile("https://www.amazon.com/(.*?)/dp/(.*?)/")
	results := []string{}
	results = append(results, r.FindStringSubmatch(link)[1])
	results = append(results, r.FindStringSubmatch(link)[2])
	return results
}

func loadEnv() {
	// Load .env file, sets automatically if it exists
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file", err)
	}
}

func GetAmazonProductReviews(product *types.Product) {
	apiUrl := fmt.Sprintf("https://amazon-merchant-data.p.rapidapi.com/get-reviews?asin=%s&country=us&page=1", product.Asin)
	
	// loads api key from .env file
	loadEnv()
	amazonAPIKey := os.Getenv("AMAZON_API_KEY")

	// creates a new request
	req, err := http.NewRequest("GET", apiUrl, nil)

	// checks if there is an error
	if err != nil {
		log.Fatal("Error getting request. ", err)
	}

	// sets the headers
	req.Header.Add("X-RapidAPI-Key", amazonAPIKey)
	req.Header.Add("X-RapidAPI-Host", "amazon-merchant-data.p.rapidapi.com")

	// gets the response
	res, err := http.DefaultClient.Do(req)

	// checks if there is an error
	if err != nil {
		log.Fatal("Error getting amazon reviews. ", err)
	}

	// closes the response body
	defer res.Body.Close()

	// reads the response body
	body, err := io.ReadAll(res.Body)

	// checks if there is an error
	if err != nil {
		log.Fatal("Error reading response body. ", err)
	}

	// prints the response body
	fmt.Println(res)
	fmt.Println(string(body))


}