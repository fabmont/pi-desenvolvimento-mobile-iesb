import { collection, getDocs } from 'firebase/firestore';

import { firestore } from './firebase';

export default async (setRecipes) => {
  try {
    const collectionRef = collection(firestore, 'recipes');
    const recipesQuery = await getDocs(collectionRef);
    const items = [];

    recipesQuery.forEach((i) => items.push({ uid: i.id, ...i.data() }));

    return setRecipes(items);
  } catch (err) {
    throw err.message;
  }
};
