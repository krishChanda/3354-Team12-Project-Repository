# 3354-Team12-Project-Repository

## *Important Note*
### Please select the "backend/auth" branch to view the full up to date code for our project

This documentation was created by the development team at Reviewify to provide a solution throughout the software life cycle. The intended audience for this software will be everyday amazon shoppers looking to find the best products for their needs. The software is made up of a few components such as, user-based extension, api scraper, ML model and AI, database, and server. These components will provide the users with an averaged and filtered review across all reviews for that product.

# test cases
### Hayden
* The system should register the user account to the system 
* The system should store the user’s email, first name, and last name in the database 
* The system should allow the user to create a sentiment score
* The system should store the Amazon link to the user’s profile if the user clicks on save sentiment score


### Pravallika
* The system shall allow a user who has an account to log in 
* The system validates user credentials (email/password/confirm password) and warns user of any errors 
* The System should display common keywords of the Amazon Product link
* The system should call a rest api to filter product reviews

### Brandon
* The system should open the extension when the icon on Chrome is clicked 
* The system should make an API call to db 
* The system should generate a sentiment score for a product link
* The system stores amazon review keywords in the database

### Krish
* The system should make an API call for user Authentication 
* The system should make an API call for Account Creation 
* The system should save sentiment analysis scores to the user profile

### Khaled
* The user should be able to view their Account 
* The system should retrieve user info from the database 
* The system should retrieve and list all past saved sentiment scores

### Adi
* The system should allow the user to edit their account and save changes to the database 
* The system should add user info to the database
* The system should allow the user to delete a saved sentiment score from profile and database

### Daniel
* The system should be able to validate different product links 
* The system should allow the user to insert different Amazon product links 
* The system should be able to open a past saved sentiment score from the user’s profile



# Project Code organization

## Src
The src folder contains all the different website components
## Components
The components folder contains all the seperate web pages
## Context
The context folder contains the security for the app, such as user authentication and api keys
## Hooks
This folder contains the code necessary for user-database interaction, such as adding, getting, and updating user
## App.js
This file contains several components and dependiencies, as well as routes between different pages
## index.js
The file sets up the react application and integrates firestore and firebase

## build/dist
This folder contains all the static react variables

## public
This folder contains all the public components that can be accessed

