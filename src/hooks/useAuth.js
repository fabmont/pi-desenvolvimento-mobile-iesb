import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

import { auth, firestore } from '../services/firebase';

export default function useAuth() {
  const [user, loading, error] = useAuthState(auth);
  const [userCreationLoading, setUserCreationLoading] = useState(false);
  const [userCreationError, setUserCreationError] = useState(null);
  const [isLogginIn, setIsLogginIn] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const createUser = async ({ email, password, fullName }) => {
    setUserCreationLoading(true);

    try {
      const { user: createdUser } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(firestore, 'users', createdUser.uid), {
        fullName,
        email,
        thumbUrl: '',
        occupation: '',
      });
    } catch (err) {
      setUserCreationError(err.message);
    }

    setUserCreationLoading(false);
  };

  const handleLogin = async ({ email, password }) => {
    setIsLogginIn(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setLoginError(err.message);
    }

    setIsLogginIn(false);
  };

  return {
    // User info
    user,
    isUserReady: loading,
    userError: error,
    // Criar conta
    createUser,
    isCreatingUser: userCreationLoading,
    userCreationError,
    // Login
    handleLogin,
    isLogginIn,
    loginError,
    // Logout
    logout: () => signOut(auth),
  };
}
