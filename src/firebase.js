import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA6Vs9t6nZiH1ob1eJJbJ2BtUbp8Kl6m5E",
    authDomain: "quora-30a14.firebaseapp.com",
    projectId: "quora-30a14",
    storageBucket: "quora-30a14.appspot.com",
    messagingSenderId: "189800550489",
    appId: "1:189800550489:web:379530d8d25df6fc22a148",
    measurementId: "G-Y7Z3HERT2P"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  const db=firebaseApp.firestore()
  export{auth, provider}
  export default db