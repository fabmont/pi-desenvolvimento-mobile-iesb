import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export default async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    throw err.message;
  }
};
