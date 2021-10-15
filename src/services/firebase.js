import * as fb from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBOLgbMbjinvHrNfaZleT1SdTRvyE6MDcc',
  authDomain: 'cookz-recipe.firebaseapp.com',
  projectId: 'cookz-recipe',
  storageBucket: 'cookz-recipe.appspot.com',
  messagingSenderId: '433725380207',
  appId: '1:433725380207:web:ab44c6f1bc5ed75b701f9a',
  measurementId: 'G-SXN8B2MMM7',
};

const firebase = fb.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
