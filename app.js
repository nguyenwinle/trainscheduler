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
    
});