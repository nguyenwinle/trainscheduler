$(document).ready(function () {

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
    $("#submit").on("click", function (event) {
        event.preventDefault();
        // YOUR TASK!!!
        // Code in the logic for storing and retrieving the most recent user.
        // Dont forget to provide initial data to your Firebase database.
        var train = $("#train").val();
        var destination = $("#destination").val();
        var time = $("#time").val();

        //get information based on the time
        var frequency = $("#frequency").val().trim();

        // Code for the push
        database.ref().push({
            train: train,
            destination: destination,
            frequency: frequency,
            time: time,
        });
    });

    database.ref().on("child_added", function (snapshot) {
        // create a new row
        var emptyTrain = snapshot.val().train;
        var emptyDestination = snapshot.val().destination;
        var emptyTime = snapshot.val().time;
        var emptyFrequency = snapshot.val().frequency;
    
        // First Time (pushed back 1 year to make sure it comes before current time)
        var convertTime = moment(emptyTime, "HH:mm");
        var currentTime = moment();

        // this gets the difference between the times
        var diffTime = moment().diff(convertTime, "minutes");

        // Time apart (remainder)
        var remainder = diffTime % emptyFrequency;

        // Minute Until Train
        var minutesAway = emptyFrequency - remainder;

        // Next Train
        var nextTrain = moment().add(minutesAway, "minutes");

        var newRow = $("<tr>").append(
            $('<td>').text(emptyTrain),
            $('<td>').text(emptyDestination),
            $('<td>').text(emptyFrequency + " min"),
            $("<td>").text(moment(nextTrain).format("hh:mm")),
            $('<td>').text(minutesAway)
        );
        
        $("tbody").append(newRow);

        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });

});