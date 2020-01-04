# Player record management system (PMS)
> The Player record Management System is made for the purpose of logging and recording all player bans and warnings for a minecraft server called WolvHaven.

This is an older version of PMS that is no longer in use.

## Technologies Used

* HTML/CSS
* Javascript
* Firebase Realtime Database
* Firebase Authentication

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
