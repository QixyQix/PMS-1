# WolvHaven PMS
> The WolvHaven Player Management System is made for the purpose of logging and recording all user bans and warnings

## Technologies Used

* HTML/CSS
* Javascript
* Firebase Realtime Database

## Setup

Create a new Javascript File titled **firebaseSetup.js** with your firebase keys and place it in the **public_html/javascript** folder

``` javascript
var config = {
                apiKey: "YOUR API KEY HERE",
                authDomain: "YOUR AUTH DOMAIN HERE",
                databaseURL: "YOUR FIREBASE URL HERE",
                projectId: "YOUR PROJECT ID HERE",
                storageBucket: "YOUR STORAGE BUCKET HERE",
                messagingSenderId: "YOUR MESSAGING SENDER ID HERE"
            };
            firebase.initializeApp(config);
```
