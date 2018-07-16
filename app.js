$(document).ready(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBwTi2gj-BtvsllGeMVDZWk9AxN8Jcy8gs",
        authDomain: "my-first-db-project-5c4ec.firebaseapp.com",
        databaseURL: "https://my-first-db-project-5c4ec.firebaseio.com",
        projectId: "my-first-db-project-5c4ec",
        storageBucket: "",
        messagingSenderId: "314678669232"
    };

    firebase.initializeApp(config);
    var database = firebase.database();

      // Capture Button Click
    $("#submit").on("click", function(event) {
        event.preventDefault();
        // YOUR TASK!!!
        // Code in the logic for storing and retrieving the most recent user.
        // Dont forget to provide initial data to your Firebase database.
        var train = $("#train").val();
        var destination = $("#destination").val();
        var time = $("#time").val();

        //get information based on the time
        //var frequency = $("#frequency").val().trim();
        
        // Code for the push
        database.ref().push({
            train: train,
            destination: destination,
            time: time,
            frequency: frequency
          });
      });
    
});