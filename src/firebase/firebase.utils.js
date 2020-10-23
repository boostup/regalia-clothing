import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

/**
 * 
 Typically it is good practice not to expose API key publicly, but in the case of firebase, we have to do so because this is how firebase knows the application is ours! This is perfectly safe, and the intended purpose of this public API key. 
 However, by committing this code to Github, we may get a warning from GitGuardian having caught a google key, but GitGuardian has acknowledged that this is not an issue [here](https://twitter.com/search?q=firebase%20api%20key%20gitguardian&src=typd)!
 * 
 */
const config = {
  apiKey: "AIzaSyBL3USq_TbUuyH_7auxEHLD3aE6POdGThw",
  authDomain: "crown-clothing-eaab6.firebaseapp.com",
  databaseURL: "https://crown-clothing-eaab6.firebaseio.com",
  projectId: "crown-clothing-eaab6",
  storageBucket: "crown-clothing-eaab6.appspot.com",
  messagingSenderId: "679771561372",
  appId: "1:679771561372:web:97379b1746df47e5697c59",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  try {
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    }
    return userRef;
  } catch (error) {
    console.error(error.message);
  }
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export default firebase;
