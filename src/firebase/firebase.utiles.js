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

/*utile for creating collection item in firebase to be able to withdraw objects and properties in future*/

export const addCollectionAndDocuments= async (collectionKey,objectsToAdd) => {
  const collectionRef = firestore.collection (collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set (newDocRef, obj); 
  });
  return await batch.commit();

};


firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map (doc => {
    const {title,items} = doc.data ();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

return transformedCollection.reduce((accumulator,collection) => {
  accumulator[collection.title.toLowerCase()] = collection;
  return accumulator;
},{});

};


export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged (userAuth => {
      unsubscribe();
      resolve (userAuth);
      }, reject);
  });
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters ({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
