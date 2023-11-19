package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	// "time"
	"AmazonAPI/pkg/api"
	"AmazonAPI/pkg/types"
	"github.com/gin-contrib/cors"
	"net/http"
)

var links = []types.Url{}

func getLink(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, links)
}

func addLink(context *gin.Context) {
	var link types.Url
	if err := context.Bind(&link); err != nil {
		return
	}
	links = append(links, link)
	fmt.Println(link)
	context.IndentedJSON(http.StatusCreated, link)
	fmt.Println(api.ParseLink(link.Url))
}

func main() {

	// server := NewServer(":8080")
	// server.Run()
	api.GetAmazonProductReviews(&types.Product{Asin: "1107189632", Title: "The Hobbit", Keywords: []string{"hobbit", "tolkien", "book"}})
	router := gin.Default()
	router.Use(cors.Default())
	// router.GET("/api/links", getLink)
	// router.POST("/api/links", addLink)
	// router.Run("localhost:8080")

}
