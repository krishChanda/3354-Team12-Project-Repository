package main

import (
	"github.com/gin-gonic/gin"
	// "time"
	"github.com/gin-contrib/cors"
)


func main() {

	// server := NewServer(":8080")
	// server.Run()
	// api.GetAmazonProductReviews(&types.Product{Asin: "1107189632", Title: "The Hobbit", Keywords: []string{"hobbit", "tolkien", "book"}})
	router := gin.Default()
	router.Use(cors.Default())
	// router.GET("/api/links", getLink)
	// router.POST("/api/links", addLink)
	// router.Run("localhost:8080")

}
