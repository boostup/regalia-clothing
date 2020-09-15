import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBL3USq_TbUuyH_7auxEHLD3aE6POdGThw",
  authDomain: "crown-clothing-eaab6.firebaseapp.com",
  databaseURL: "https://crown-clothing-eaab6.firebaseio.com",
  projectId: "crown-clothing-eaab6",
  storageBucket: "crown-clothing-eaab6.appspot.com",
  messagingSenderId: "679771561372",
  appId: "1:679771561372:web:97379b1746df47e5697c59",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
