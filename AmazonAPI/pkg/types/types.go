package types
//Hayden Bell

import (
	"net/http"
)

type APIServer struct {
	listenAddr string
}

type APIError struct {
	Error string
}

type apiFunc func(http.ResponseWriter, *http.Request) error

type Url struct {
	Url string `json:"link"`
}

type Keywords struct {
	Keywords []string `json:"keywords"`
}

type Product struct {
	AmazonLink string 
	Asin     string   `json:"asin"`
	Title    string   `json:"title"`
	Keywords []string `json:"keywords"`
}

type Products struct {
	Products []Product `json:"products"`
}

type Review struct {
	ID         string `json:"id"`
	Title      string `json:"title"`
	Text       string `json:"text"`
	Date       string `json:"date"`
	Rating     string `json:"rating"`
	Author     string `json:"username"`
	NumHelpful int    `json:"nrHelpful"`
	Verified   bool   `json:"verified"`
	Variations string `json:"variations"`
	Images     []any  `json:"images"`
	Thumbnails []any  `json:"thumbnails"`
}

type ProductReview struct {
	Error       bool     `json:"error"`
	Asin        string   `json:"asin"`
	ReviewCount int      `json:"reviewCount"`
	LastPage    int      `json:"lastPage"`
	Reviews     []Review `json:"reviews"`
}
