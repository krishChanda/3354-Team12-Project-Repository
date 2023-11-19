package api

import (
	"github.com/joho/godotenv"
	"log"
	"AmazonAPI/pkg/types"
	"github.com/gin-gonic/gin"
	"net/http"
)


var links = []types.Url{}

func GetLink(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, links)
}

func AddLink(context *gin.Context) {
	var link types.Url
	if err := context.Bind(&link); err != nil {
		return
	}
	links = append(links, link)
	context.IndentedJSON(http.StatusCreated, link)
}


func LoadEnv() {
	// Load .env file, sets automatically if it exists
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file", err)
	}
}