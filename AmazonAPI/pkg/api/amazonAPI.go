package api

import (
	"regexp"
)


func ParseLink(link string) []string {
	r, _ := regexp.Compile("https://www.amazon.com/(.*?)/dp/(.*?)/")
	results := []string{}
	results = append(results, r.FindStringSubmatch(link)[1])
	results = append(results, r.FindStringSubmatch(link)[2])
	return results
}