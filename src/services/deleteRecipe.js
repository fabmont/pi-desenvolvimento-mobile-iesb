import { doc, deleteDoc } from 'firebase/firestore';

import { firestore } from './firebase';

export default async (recipeUid) => {
  try {
    const collectionRef = doc(firestore, 'recipes', recipeUid);
    await deleteDoc(collectionRef);

    return true;
  } catch (err) {
    throw err.message;
  }
};
