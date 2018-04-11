'use strict';
    var firebase = require("firebase");

    // var config = {
    // apiKey: "AIzaSyCZ1JCuclZU_XpsiFRh07OIm45Ze_zIfmk",
    // authDomain: "sillynamemaker-7650b.firebaseapp.com",
    // databaseURL: "https://sillynamemaker-7650b.firebaseio.com",
    // storageBucket: "sillynamemaker-7650b.appspot.com",
    // };
    // firebase.initializeApp(config);



process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');


// a. the action name from the make_name Dialogflow intent
const NAME_ACTION = 'make_name';
// b. the parameters that are parsed from the make_name intent
const COLOR_ARGUMENT = 'geo-city';
const NUMBER_ARGUMENT = 'number';


exports.sillyNameMaker = functions.https.onRequest((request, response) => {
  const app = new App({request, response});
 

// c. The function that generates the silly name
  function makeName (app) {
    let number = app.getArgument(NUMBER_ARGUMENT);
    let color = app.getArgument(COLOR_ARGUMENT);
    let time = Date();

    // var database = firebase.database();
    // database.ref('event 2').set({
    //                             "username" : "name",
    //                             "email" : "email",
    //                             "profile_picture" : time
    //                             });


    app.tell('Alright, your silly name is ' +
      color + ' ' + number +
      '! I hope you like it. See you next time.');
     console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));

  }
  // d. build an action map, which maps intent names to functions
  let actionMap = new Map();
  actionMap.set(NAME_ACTION, makeName);


app.handleRequest(actionMap);
});