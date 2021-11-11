import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { auth, firestore, storage } from './firebase';

export default async (imgResource) => {
  const imgUri = imgResource?.uri;
  const userUid = auth.currentUser.uid;

  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(imgUri);
    const blob = await response.blob();
    const bucketRef = ref(storage, `users/${userUid}/thumb`);
    const { ref: uploadedFileRef } = await uploadBytes(bucketRef, blob);
    const downloadUrl = await getDownloadURL(uploadedFileRef);

    const docRef = doc(firestore, 'users', userUid);
    await setDoc(
      docRef,
      {
        thumbUrl: downloadUrl,
      },
      { merge: true }
    );
  } catch (err) {
    throw err.message;
  }
};
