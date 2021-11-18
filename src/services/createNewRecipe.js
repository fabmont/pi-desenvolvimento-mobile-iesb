import { doc, addDoc, setDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { storage, firestore, auth } from './firebase';

export default async ({
  thumbImg: { uri: imgUri },
  name,
  description,
  category,
  timeToPrepare,
  servesNumber,
  ingredients,
  prepare,
}) => {
  try {
    const { currentUser } = auth;

    const payload = {
      title: name,
      description,
      category: category.row,
      timeToPrepare,
      servesNumber,
      ingredients,
      prepare,
      owner: { uid: currentUser.uid, name: currentUser.displayName },
    };

    const collectionRef = collection(firestore, 'recipes');
    const { id } = await addDoc(collectionRef, payload);

    // eslint-disable-next-line no-undef
    const response = await fetch(imgUri);
    const blob = await response.blob();
    const bucketRef = ref(storage, `recipes/${id}/thumb`);
    const { ref: uploadedFileRef } = await uploadBytes(bucketRef, blob);
    const downloadUrl = await getDownloadURL(uploadedFileRef);

    const docRef = doc(firestore, 'recipes', id);
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
