package api

import (
	"fmt"
	"context"
	openai "github.com/sashabaranov/go-openai"
	"os"
)

func OpenAIAPI(reviews []string) ([]string, error){
	// loads api key from .env file	
	LoadEnv()
	openAIAPIKey := os.Getenv("OPENAI_API_KEY")


	// convert []string to string
	reviewsString := fmt.Sprint(reviews)
	prompt := fmt.Sprintf("Identify the top 15 keywords for the following list of reviews:\n\n%s", reviewsString)


	client := openai.NewClient(openAIAPIKey)
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role: openai.ChatMessageRoleUser,
					Content: prompt,
				},
			},
		},
	)
	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return nil, err
	}

	fmt.Println(resp.Choices[0].Message.Content)
	fmt.Println(resp)
	return nil, nil
}