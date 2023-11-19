package main

import (
	"encoding/json"
	"fmt"
	"log"

	// "fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func NewServer(listenAddr string) *APIServer {
	return &APIServer{
		listenAddr: listenAddr,
	}
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Add("Access-Control-Allow-Origin", "*")
	(*w).Header().Add("Access-Control-Allow-Credentials", "true")
	(*w).Header().Add("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	(*w).Header().Add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")

}

func WriteJSON(w http.ResponseWriter, status int, v any) error {
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(status)
	return json.NewEncoder(w).Encode(v)
}

func makeHTTPHandleFunc(f apiFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		if err := f(w, r); err != nil {
			WriteJSON(w, http.StatusBadRequest, APIError{Error: err.Error()})
		}
	}
}

func (s *APIServer) handleLink(w http.ResponseWriter, r *http.Request) error {
	if r.Method == "POST"{
		log.Println("test")
		return s.handleGetLink(w, r)
	}

	return fmt.Errorf("invalid method %s", r.Method)
}

func (s *APIServer) handleGetLink(w http.ResponseWriter, r *http.Request) error {
	url := mux.Vars(r)["url"]
	return WriteJSON(w, http.StatusOK, &Url{url})
}

func (s *APIServer) Run() error {
	router := mux.NewRouter()
	router.HandleFunc("/api/links", makeHTTPHandleFunc(s.handleLink))
	http.ListenAndServe(s.listenAddr, router)
	return nil
}

func main() {

	server := NewServer(":8080")
	server.Run()

}
