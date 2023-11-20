package api

//Hayden Bell

import (
	"AmazonAPI/pkg/types"
	"context"
	"firebase.google.com/go"
	"google.golang.org/api/option"
	"log"
)

func Firebase(Product *types.Product) {
	// sets up firebase
	opt := option.WithCredentialsFile("./ServiceAccountKey.json")
	config := &firebase.Config{ProjectID: "reviewify-project"}
	app, err := firebase.NewApp(context.Background(), config, opt)
	if err != nil {
		log.Fatal("Error initializing firebase app. ", err)
	}
	client, err := app.Firestore(context.Background())
	if err != nil {
		log.Fatal("Error initializing firestore. ", err)
	}

	results, err := client.Collection("sentimentdoc").Parent.Create(context.Background(), map[string]interface{}{
		"keywords":    Product.Keywords,
		"asin":        Product.Asin,
		"productName": Product.Title,
	})

	if err != nil {
		log.Fatal("Error creating document. ", err)
	}

	log.Println(results)

	defer client.Close()
}
