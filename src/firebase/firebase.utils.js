import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDl1o5lwwnFx9OM19OIxyQU3ibaBhc4JRw",
        authDomain: "crwn-db-1e994.firebaseapp.com",
        databaseURL: "https://crwn-db-1e994.firebaseio.com",
        projectId: "crwn-db-1e994",
        storageBucket: "crwn-db-1e994.appspot.com",
        messagingSenderId: "78358644036",
        appId: "1:78358644036:web:7f30113ecc74ba13914311"
      };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth)return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
        console.log('error creating user',error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;