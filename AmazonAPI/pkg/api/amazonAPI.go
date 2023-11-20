package api

// Hayden Bell

import (
	"AmazonAPI/pkg/types"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"regexp"
)

func ParseLink(link string) []string {
	r, _ := regexp.Compile("https://www.amazon.com/(.*?)/dp/(.*?)/")
	results := []string{}
	results = append(results, r.FindStringSubmatch(link)[1])
	results = append(results, r.FindStringSubmatch(link)[2])
	return results
}

func parseResponse(res *[]byte) (*types.ProductReview, error) {

	var productReview types.ProductReview

	if err := json.Unmarshal(*res, &productReview); err != nil {
		return nil, err
	}
	return &productReview, nil
}

func getAPIResponse(asin string) (*http.Response, error) {
	apiUrl := fmt.Sprintf("https://amazon-merchant-data.p.rapidapi.com/get-reviews?asin=%s&country=us&page=1", asin)

	// loads api key from .env file
	LoadEnv()
	amazonAPIKey := os.Getenv("AMAZON_API_KEY")

	// creates a new request
	req, err := http.NewRequest("GET", apiUrl, nil)

	// checks if there is an error, this is the preferred way to handle errors in go
	if err != nil {
		log.Fatal("Error getting request. ", err)
		return nil, err
	}

	// sets the headers
	req.Header.Add("X-RapidAPI-Key", amazonAPIKey)
	req.Header.Add("X-RapidAPI-Host", "amazon-merchant-data.p.rapidapi.com")

	// gets the response
	res, err := http.DefaultClient.Do(req)

	// checks if there is an error
	if err != nil {
		log.Fatal("Error getting amazon reviews. ", err)
		return nil, err
	}

	return res, nil
}

func GetAmazonProductReviews(product *types.Product) (*types.ProductReview, error) {

	// gets the response
	res, err := getAPIResponse(product.Asin)

	// checks if there is an error, this format is the preferred way to handle errors in go
	if err != nil {
		log.Fatal("Error getting amazon reviews. ", err)
		return nil, err
	}

	// closes the response body
	defer res.Body.Close()

	// reads the response body
	body, err := io.ReadAll(res.Body)

	// checks if there is an error
	if err != nil {
		log.Fatal("Error reading response body. ", err)
		return nil, err
	}

	// parses the response
	productReview, err := parseResponse(&body)

	// checks if there is an error
	if err != nil {
		log.Fatal("Error parsing response. ", err)
		return nil, err
	}

	// prints the response for debugging
	// fmt.Println(PrettyPrint(productReview))

	return productReview, nil

}

func ParseProductReviews(productReview *types.ProductReview) []string {
	reviewsJson := productReview.Reviews
	reviewTexts := []string{}

	// appends all the review texts to the reviewTexts slice
	for _, review := range reviewsJson {
		reviewTexts = append(reviewTexts, review.Text)
	}

	return reviewTexts
}
