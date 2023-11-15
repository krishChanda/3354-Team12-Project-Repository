package types

type ProductReview struct {
	AverageRating        float32 `json:"average_rating"`
	TotalRatings         int     `json:"total_ratings"`
	FilteredTotalRatings int     `json:"filtered_total_ratings"`

	TotalReviews         int `json:"total_reviews"`
	FilteredTotalReviews int `json:"filtered_total_reviews"`

	FiveStarRatings    int     `json:"5_star_ratings"`
	FiveStarPercentage float32 `json:"5_star_percentage"`

	FourStarRatings    int     `json:"4_star_ratings"`
	FourStarPercentage float32 `json:"4_star_percentage"`

	ThreeStarRatings    int     `json:"3_star_ratings"`
	ThreeStarPercentage float32 `json:"3_star_percentage"`

	TwoStarRatings    int     `json:"2_star_ratings"`
	TwoStarPercentage float32 `json:"2_star_percentage"`

	OneStarRatings    int     `json:"1_star_ratings"`
	OneStarPercentage float32 `json:"1_star_percentage"`

	Product           Product   `json:"product"`
	Variation         Variation `json:"variation"`
	TopPostiveReview  Review    `json:"top_postive_review"`
	TopCriticalReview Review    `json:"top_critical_review"`
	Reviews           []Review  `json:"reviews"`
}

type Product struct {
	URL   string  `json:"url"`
	Name  string  `json:"name"`
	Brand string  `json:"brand"`
	Price float32 `json:"price"`
	Image string  `json:"image"`
}

type Variation struct {
	Color string `json:"color"`
}

type Review struct {
	Stars               int       `json:"stars"`
	Date                string    `json:"date"`
	VerifiedPurchase    bool      `json:"verified_purchase"`
	ManufacturerReplied bool      `json:"manufacturer_replied"`
	Username            string    `json:"username"`
	Title               string    `json:"title"`
	Review              string    `json:"review"`
	TotalFoundHelpful   int       `json:"total_found_helpful"`
	Images              []string  `json:"images"`
	Variation           Variation `json:"variation"`
	VideoUrl            string    `json:"video_url"`
}
