// Author: Brandon Plant
// Test Case 17: The system should generate a sentiment score for a product link
// Open AI Sentiment Score Generator 

import React from 'react'
import OpenAI from 'openai'

const getSentimentScore = async (words) => {
    const openai = new OpenAI({apiKey: "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", dangerouslyAllowBrowser: true})

    const completion = await openai.chat.completions.create({
        messages: [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": words + ", Using these words, generate a sentiment score from 1-10, but only respond with a number."}
        ],
        model: "gpt-3.5-turbo"
    })

    console.log(completion.choices[0].message.content)

    return completion.choices[0].message.content
}

export default getSentimentScore