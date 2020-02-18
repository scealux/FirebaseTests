import "./styles.css";
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCnX0QtAXNE0oqWKAxXn4JSiQ9v46Qogjo",
  authDomain: "fishcityco.firebaseapp.com",
  databaseURL: "https://fishcityco.firebaseio.com",
  projectId: "fishcityco",
  storageBucket: "fishcityco.appspot.com",
  messagingSenderId: "1082245393669",
  appId: "1:1082245393669:web:dcc2eb93208b6e10505b6c",
  measurementId: "G-PD6CV02PP8"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

function loginWithG() {
  console.log("Sign in with G");
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleAuthProvider);
}

function signOut() {
  console.log("Signing Out");
  firebase.auth().signOut();
}

var currentUser;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    currentUser = user;
    //var displayName = user.displayName;
    var email = user.email;
    //var emailVerified = user.emailVerified;
    //var photoURL = user.photoURL;
    //var isAnonymous = user.isAnonymous;
    //var uid = user.uid;
    //var providerData = user.providerData;
    console.log(email);
    gLogButt.hidden = true;
    sOButt.hidden = false;
    // ...
  } else {
    // User is signed out.
    // ...
    currentUser = "";
    console.log(email);
    gLogButt.hidden = false;
    sOButt.hidden = true;
  }
});

var gLogButt = document.getElementById("gLoginButton");
gLogButt.addEventListener("click", loginWithG);

var sOButt = document.getElementById("sOutButton");
sOButt.addEventListener("click", signOut);
