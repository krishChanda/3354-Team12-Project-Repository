package main

// Hayden Bell

import (
	"AmazonAPI/pkg/api"
	"AmazonAPI/pkg/types"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"time"
)

func main() {

	// server := NewServer(":8080")
	// server.Run()
	// api.GetAmazonProductReviews(&types.Product{Asin: "1107189632", Title: "The Hobbit", Keywords: []string{"hobbit", "tolkien", "book"}})
	router := gin.Default()
	// router.Use(cors.Default())
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"POST", "GET"},
		AllowHeaders:     []string{"*"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	api.Firebase(&types.Product{Asin: "1107189632", Title: "The Hobbit", Keywords: []string{"hobbit", "tolkien", "book"}})
	router.GET("/api/links.json", api.GetProduct)
	router.GET("/api/links", api.GetProduct)
	router.POST("/api/links", api.AddLink)
	router.Run("localhost:8080")

}
