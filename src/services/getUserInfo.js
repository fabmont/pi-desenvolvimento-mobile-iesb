import { onSnapshot, doc } from 'firebase/firestore';
import { auth, firestore } from './firebase';

export default (setData) => {
  const userUid = auth.currentUser.uid;

  try {
    const userRef = doc(firestore, 'users', userUid);

    return onSnapshot(userRef, (listenedDoc) => {
      if (listenedDoc.exists()) {
        return setData(listenedDoc.data());
      }

      return null;
    });
  } catch (error) {
    throw error.message;
  }
};
