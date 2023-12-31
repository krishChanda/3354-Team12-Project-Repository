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
	opt := option.WithCredentialsJSON([]byte(
	`{"type": "service_account",
	"project_id": "reviewify-project",
	"private_key_id": "8f29b834b66f4cabb8b41c627a1c71c2c05b6a05",
	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDfIN94ytf+nU6P\nspL0qTSGCn+/GUvUII41vlc/k1c6pEgrYYTdq5ec6cMF3exY3nriUjPPkTRw7u8Z\n35BbrDjjd3cw+Xz6+lCyajeO0ucdNgQY/0e7mUVtWDyyjpK2x0jJOxEHF2kSH///\niL3z5sMKn42+363qvO3PHz4+Of4bHIExTI+JjXia8tJx5MJUBOrdUi/1KpJkbhyb\nEy8PJC2+CmR+VjFuMgVLdpyPTftZw+yxl4xGK2Y3mCtIG45Vvq30wtZeM54UAsVa\ns8QoDkiEdijxKnfBTLO2kILBcLdu/PvD6eqMYUbKfXcVt/xo0kbdzUb7GYkCr+Qg\nd2xr18RFAgMBAAECggEANOHZJQtKQu2se3Ey1CqwKJ6fZT7NEoL+wW0Rx58Xmu3p\nruJnd5QeFFHw51iQFgXwsOgToHvFJojygTrTv25jc0HSrXhL7z3ZV1fGQCLrJKiz\nMut56FPsuPwjMpyI2CoGLa9Cm2AohmOwLDOP9Zj5G/Dxys2/rfVGFYNNoLjk6S6Y\ncHHg0X+LsfnRRWpFz89v4Xw7+MCXhIyoD/lDLc79MnQYyUjatNjUgOkU7x/lDhMH\nohl/pjgPGHeBH45Shtm2Ljb2PZf3SlkZNy3678dDwizd6xclAkVwcw4tBSYyKG5V\nTE18NcRKf9xO58Rfkl226nhrYCVZrvdMQl6LykV+YQKBgQD37bRkOUFbb0+H7WNu\nUrtmMdDna3mT8KXfgQQx3Lpp7Bgu3LY1t76SGRGa+HZUNAu4BDpx5xcVtYkaCEeB\nBQEsCF+czbGGrv1ziIAoGyFS/MKVQgdudjY+CNSa+uR3GATrtzh2SxnkQtDJ+OhI\nYV/TsJtNSl90nVDCE1ZoiOFYlQKBgQDmZHpoSg2UZdWF2PCGi12dRziTWy3pXJ1N\nZmEdPGXw7EENql24IG9jxj23efgxXMAH9ee3mADWGVdvvLfkUqgMSZJx/xiaXlTC\nfiaN43iddjh/zMDSLA3FL5Lhqe6qfLhdqtRFb1hGK8KNFm2qTyuO2rMNpgB7x5gG\nEBUWkC3g8QKBgQCYiw25uKyo2GTjqkDKSWb6Kt5w9OSaDK/SQ6xUDY44y8XZV31Y\nsdQ0Se5WHleX2Wn4b8mR+XBvsAFKHhv4mx6se/5wGPMIfjR9WFgZ1Q984v3KHhU6\ndstLAd3l+UaGrCWi7ll0FyM4GZAjJN2uYxM1yWzUclUnB///WSyKJuYXvQKBgDNC\nRa2wVCchJQl7g8Abf79/WgoG7kcOUP0oexDbID8jATI+Jk3SAZZsQ8zveRXacesT\nffNuATmhN7/nd+53qWXadJeiTuIBfNAs6v0EkBBQfi+I6ZmZLZMii4ZjnXMW/pnw\naPvt0vEByW5EgC+1H5bP96hgt5jShnNK3rY/a8WxAoGAV5cU68IQ0bJnzbFwd3z3\ndvVdis79kzLkGrXgZPihAoAfV1kqWOcU9b6Qizt2Htfb5zBOCSR531epHQpJ9Ujq\nlQnKw6F7mJyXZsQtauD+2h2CWPEyf58sP3DeIPq7g6YE4NciFd3X1RJVCK8fKGA+\n5Uwuvv7w0rGS5XOW4+/KfoQ=\n-----END PRIVATE KEY-----\n",
	"client_email": "firebase-adminsdk-7kr5g@reviewify-project.iam.gserviceaccount.com",
	"client_id": "101579297733549492782",
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://oauth2.googleapis.com/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7kr5g%40reviewify-project.iam.gserviceaccount.com",
	"universe_domain": "googleapis.com"}`))
	config := &firebase.Config{ProjectID: "reviewify-project"}
	app, err := firebase.NewApp(context.Background(), config, opt)

	if err != nil {
		log.Fatal("Error initializing firebase app. ", err)
	}

	client, err := app.Firestore(context.Background())

	if err != nil {
		log.Fatal("Error initializing firestore. ", err)
	}

	docref, results, err := client.Collection("keywords").Add(context.Background(), map[string]interface{}{
		"amazonLink":  Product.AmazonLink,
		"keywords":    Product.Keywords,
		"asin":        Product.Asin,
		"productName": Product.Title,
	})

	if err != nil {
		log.Fatal("Error creating document. ", err)
	}

	log.Println(results, docref.ID)

	defer client.Close()
}
