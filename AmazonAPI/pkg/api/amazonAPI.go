package api

import (
	// "AmazonAPI/pkg/types"
	// "errors"
	"fmt"
	// "github.com/gin-gonic/gin"
	"io"
	"net/http"
)

// func getProductReview(context *gin.Context) {
// 	context.Writer.Header().Add("X-RapidAPI-Key", "key")
// 	context.Writer.Header().Add("X-RapidAPI-Host", "axesso-axesso-amazon-data-service-v1.p.rapidapi.com")
// 	fmt.Println(context.Request.Body)
// }

func AmazonAPI() {

	url := "https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/amazon-lookup-reviews?page=1&domainCode=com&asin=B07YLDNTKB&sortBy=recent&filters=reviewerType%3Davp_only_reviews%3BfilterByStar%3Dfive_star"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Key", "bdd65e8a0dmsh8689fc8f37300f0p1fd32bjsn48033f7ff47b")
	req.Header.Add("X-RapidAPI-Host", "axesso-axesso-amazon-data-service-v1.p.rapidapi.com")

	res, err := http.DefaultClient.Do(req)

	if err != nil {
		fmt.Println(err)
	}
	
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
