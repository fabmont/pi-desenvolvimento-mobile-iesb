import {
  onSnapshot,
  doc,
  setDoc,
  arrayUnion,
  arrayRemove,
  increment,
} from 'firebase/firestore';
import { auth, firestore } from './firebase';

export const setFavorite = async (isFavorite, recipeUid) => {
  const { uid } = auth.currentUser;

  try {
    const userRef = doc(firestore, 'users', uid);
    const recipeRef = doc(firestore, 'recipes', recipeUid);

    if (isFavorite) {
      // Removes the recipe UID to the user favorites array
      await setDoc(
        userRef,
        { favorites: arrayRemove(recipeUid) },
        { merge: true }
      );

      // Decrements the favorite counter on the recipe doc
      await setDoc(
        recipeRef,
        { favoriteCounter: increment(-1) },
        { merge: true }
      );
    } else {
      // Adds the recipe UID to the user favorites array
      await setDoc(
        userRef,
        { favorites: arrayUnion(recipeUid) },
        { merge: true }
      );

      // Increments the favorite counter on the recipe doc
      await setDoc(
        recipeRef,
        { favoriteCounter: increment(1) },
        { merge: true }
      );
    }
  } catch (error) {
    throw error.message;
  }
};

export default (recipeUid, setIsFavorite) => {
  const { uid } = auth.currentUser;

  try {
    const userRef = doc(firestore, 'users', uid);

    return onSnapshot(userRef, (snp) => {
      const userFavorites = snp.data().favorites || [];
      const isFavorite = userFavorites.indexOf(recipeUid) >= 0;
      setIsFavorite(isFavorite);
    });
  } catch (error) {
    throw error.message;
  }
};
