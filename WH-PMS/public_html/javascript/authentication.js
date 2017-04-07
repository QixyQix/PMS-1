/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Authentication - Check if user logged in
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    var head = document.getElementById("contenttop");
                    head.innerHTML = "Welcome back, " + user.email;
                } else {
                    // User is signed out.
                    window.location = "index.html";
                }
            });
            //Authentication - Log out user
            var logout = document.getElementById("signOut");
            logout.addEventListener('click', function signout() {
                firebase.auth().signOut().then(function () {
                    window.location = "index.html";
                }, function (error) {
                    console.log(error);
                });
            });