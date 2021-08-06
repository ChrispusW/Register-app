import firebase from "firebase"


//configuration keys for  message app
const firebaseConfig = {
  apiKey: "AIzaSyCt7iv40orQWjJ2pJ5ejPqAXjN7jp09RNE",
  authDomain: "stratcom-registration-system.firebaseapp.com",
  projectId: "stratcom-registration-system",
  storageBucket: "stratcom-registration-system.appspot.com",
  messagingSenderId: "23178579512",
  appId: "1:23178579512:web:bd1db5d81018baca6a60cd",
  measurementId: "G-62EP14853D"
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