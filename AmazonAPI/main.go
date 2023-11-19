package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	// "time"
	"net/http"
	"github.com/gin-contrib/cors"
)

var links = []Url{}

func getLink(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, links)
}

func addLink(context *gin.Context) {
	var link Url
	if err := context.Bind(&link); err != nil {
		return
	}
	links = append(links, link)
	fmt.Println(link)
	context.IndentedJSON(http.StatusCreated, link)
}

func main() {

	// server := NewServer(":8080")
	// server.Run()

	router := gin.Default()
	router.Use(cors.Default())
	router.GET("/api/links", getLink)
	router.POST("/api/links", addLink)
	router.Run("localhost:8080")

}
