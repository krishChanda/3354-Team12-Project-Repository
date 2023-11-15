package api

import (
	"fmt"
	"net/http"
	"io"
)

func amazonAPI() {

	url := "https://amazon-scrapper-api3.p.rapidapi.com/products/B0BSXG8SGQ/reviews?api_key=17fd230b65a63c27854fdb057d95524c"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Key", "SIGN-UP-FOR-KEY")
	req.Header.Add("X-RapidAPI-Host", "amazon-scrapper-api3.p.rapidapi.com")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}