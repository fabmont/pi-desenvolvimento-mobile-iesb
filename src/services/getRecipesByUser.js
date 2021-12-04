import { collection, query, where, onSnapshot } from 'firebase/firestore';

import { firestore, auth } from './firebase';

export default (setRecipes) => {
  try {
    const userUid = auth.currentUser.uid;

    const collectionRef = collection(firestore, 'recipes');
    const recipesQuery = query(
      collectionRef,
      where('owner.uid', '==', userUid)
    );

    return onSnapshot(recipesQuery, (listenedDoc) => {
      const res = [];
      listenedDoc.forEach((i) => res.push({ uid: i.id, ...i.data() }));

      return setRecipes(res);
    });
  } catch (err) {
    throw err.message;
  }
};
