import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { set } from "firebase/database";
import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // cleanup
  // deal with memory leaks
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkForCancellation() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkForCancellation();

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(userCredential.user, {
        displayName: data.name,
      });

      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
  };
};
