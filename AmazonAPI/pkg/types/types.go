package types


type review struct {
	ID         string   `json:"id"`
	Title      string   `json:"title"`
	Text       string   `json:"text"`
	Date       string   `json:"date"`
	Rating     string   `json:"rating"`
	Author     string   `json:"username"`
	NumHelpful int      `json:"nrHelpful"`
	Verified   bool     `json:"verified"`
	Variations string   `json:"variations"`
	Images     []string `json:"images"`
	Thumbnails []string `json:"thumbnails"`
}

type productReview struct {
	Error        bool     `json:"error"`
	Asin         string   `json:"asin"`
	TotalReviews int      `json:"reviewCount"`
	LastPage     int      `json:"lastPage"`
	Reviews      []review `json:"reviews"`
}