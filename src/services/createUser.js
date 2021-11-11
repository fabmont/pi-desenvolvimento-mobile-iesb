import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { auth, firestore } from './firebase';

export default async ({ email, password, fullName }) => {
  try {
    const { user: createdUser } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const docRef = doc(firestore, 'users', createdUser.uid);

    await setDoc(
      docRef,
      {
        fullName,
        email,
        thumbUrl: '',
        age: '',
        occupation: '',
        bio: '',
      },
      { merge: true }
    );
  } catch (err) {
    throw err.message;
  }
};
