package main

// Hayden Bell
// Test Case 23: The system should call a rest API to filter product reviews

import (
	"AmazonAPI/pkg/api"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"time"
)

func main() {

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
	router.GET("/api/links.json", api.GetProduct)
	router.GET("/api/links", api.GetProduct)
	router.POST("/api/links", api.AddLink)
	router.Run("localhost:8080")

}
