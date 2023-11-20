# 3354-Team12-Project-Repository

## *Important Note*
### Please select the "backend/auth" branch to view the full up-to-date code for our project

This documentation was created by the development team at Reviewify to provide a solution throughout the software life cycle. The intended audience for this software will be everyday Amazon shoppers looking to find the best products for their needs. The software is made up of a few components such as a user-based extension, API scraper, ML model and AI, database, and server. These components will provide the users with an averaged and filtered review across all reviews for that product.

# test cases
### Hayden
* 1: The system should register the user account to the system 
* 2: The system should store the user’s email, first name, and last name in the database 
* 16: The System should display common keywords of the Amazon Product link
* 23: The system should call a rest API to filter product reviews

### Pravallika
* 3: The system shall allow a user who has an account to log in 
* 4: The system validates user credentials (email/password/confirm password) and warns the user of any errors 
* 15: The system should allow the user to create a sentiment score 
* 22: The system should store the Amazon link to the user’s profile if the user clicks on save sentiment score

### Brandon
* 5: The system should open the extension when the icon on Chrome is clicked 
* 6: The system should make an API call to DB 
* 17: The system should generate a sentiment score for a product link
* 24: The system stores Amazon review keywords in the database

### Krish
* 7: The system should make an API call for user Authentication 
* 8: The system should make an API call for Account Creation 
* 18: The system should save sentiment analysis scores to the user profile

### Khaled
* 9: The user should be able to view their Account 
* 10: The system should retrieve user info from the database 
* 19: The system should retrieve and list all past saved sentiment scores

### Adi
* 11: The system should allow the user to edit their account and save changes to the database 
* 12: The system should add user info to the database
* 20: The system should allow the user to delete a saved sentiment score from the profile and database

### Daniel
* 13: The system should be able to validate different product links 
* 14: The system should allow the user to insert different Amazon product links 
* 21: The system should be able to open a past saved sentiment score from the user’s profile



# Project Code organization

## Src
The src folder contains all the different website components

## Components
The components folder contains all the separate web pages

## Context
The context folder contains the security for the app, such as user authentication and API keys

## Hooks
This folder contains the code necessary for user-database interaction, such as adding, getting, and updating users. The folder also contains the necessary code for accessing, deleting, and getting Amazon product data (sentiment score and keywords)from the database.

## App.js
This file contains several components and dependencies, as well as routes between different pages

## index.js
The file sets up the react application and integrates Firestore and Firebase

## build/dist
This folder contains all the static react variables

## public
This folder contains all the public components that can be accessed

