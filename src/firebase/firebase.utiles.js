import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCWO7aiUfmjivKQ0Dwixoz07a333WlhuPc",
  authDomain: "crowndb-bf796.firebaseapp.com",
  databaseURL: "https://crowndb-bf796.firebaseio.com",
  projectId: "crowndb-bf796",
  storageBucket: "crowndb-bf796.appspot.com",
  messagingSenderId: "112297164384",
  appId: "1:112297164384:web:0c54305b35f3e9f1020d05"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc (`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
if(!snapShot.exists) {
const {displayName, email} = userAuth;
const createdAt = new Date();

try {
  await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData 
  });
} catch (error) {
console.log ('error creating user', error.message);
}
}
  
return userRef;

}; 


firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters ({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
