import { doc, setDoc } from 'firebase/firestore';

import { auth, firestore } from './firebase';

export default async ({ fullName, age, occupation, bio }) => {
  const userUid = auth.currentUser.uid;

  try {
    const docRef = doc(firestore, 'users', userUid);

    await setDoc(docRef, { fullName, age, occupation, bio }, { merge: true });
  } catch (err) {
    throw err.message;
  }
};
