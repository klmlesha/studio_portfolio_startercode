//Unit 1 Portfolio with Firebase
// Use Firebase to store the images links and info for your projects. 
// Use Jquery to dynamically display the information from firebse. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
var config = {
    apiKey: "AIzaSyDaY0cm8bEJxRrNH3z8DVspzJ5kBPHVvDo",
    authDomain: "myportfolio-5187c.firebaseapp.com",
    databaseURL: "https://myportfolio-5187c.firebaseio.com",
    projectId: "myportfolio-5187c",
    storageBucket: "",
    messagingSenderId: "418406044100"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  var firstname = firebase.database().ref("fname");
  var description = firebase.database().ref("description");
  var bio = firebase.database().ref("bio");

firstname.on("value", function(snapshot){
    var name = snapshot.val();
    $(".firstname").html(name);
    console.log(name);

})

bio.on("value", function(snapshot){
    var biography = snapshot.val();
    $(".bio").html(biography);
    console.log(biography);

})

description.on("value", function(snapshot){
    var descript  = snapshot.val();
    $(".description").html(descript);
    console.log(descript);

})