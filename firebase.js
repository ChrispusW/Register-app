import firebase from "firebase"


//configuration keys for  stratcom registration system
const firebaseConfig = {
  apiKey: "AIzaSyAYHtk2cYsbnUti6DHtdseyB9doNJNb_L0",
  authDomain: "stratcom-5a07f.firebaseapp.com",
  projectId: "stratcom-5a07f",
  storageBucket: "stratcom-5a07f.appspot.com",
  messagingSenderId: "841014126256",
  appId: "1:841014126256:web:58ae032b3112f900873d75",
  measurementId: "G-95DSJG1SG3"
  };
  
  // code to initialise app
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // invoking our database
  const db =firebaseApp.firestore();

  // invoking our authentication service

  const auth =firebase.auth();

  // google auth provider setup
  const provider = new firebase.auth.GoogleAuthProvider()

  //exporting our instances so that we can use them any where in our project
    export {auth,provider};
    export default db;
  