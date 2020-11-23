import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCxqw7N1vY6hj9l9lrb1az0XUpvalBdKkw",
    authDomain: "ecommerce-pr.firebaseapp.com",
    databaseURL: "https://ecommerce-pr.firebaseio.com",
    projectId: "ecommerce-pr",
    storageBucket: "ecommerce-pr.appspot.com",
    messagingSenderId: "557097309254",
    appId: "1:557097309254:web:751f4c77345fb71c1fe647",
    measurementId: "G-1QPW0QSJK7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  //  const credential = new firebase.auth.GithubAuthProvider();
  //  credential.setCustomParameters({ prompt: 'select_account' });
  //  export const signInWithCredential = () => auth.signInWithPopup(credential);


  // const facebook = new firebase.auth.FacebookAuthProvider();
  // facebook.setCustomParameters({ prompt: 'select_account' });
  // export const signInWithFacebook = () => auth.signInWithPopup(facebook);
