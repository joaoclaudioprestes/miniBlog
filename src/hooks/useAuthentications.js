import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // cleanup
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkedIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const creatUser = async (data) => {
    checkedIfIsCancelled();

    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.error(error.mensagem);
      console.error(typeof error.mensagem);

      let systemErrorMenssage;

      if (error.message.includes("Password")) {
        systemErrorMenssage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMenssage = "E-mail já Cadastrado!";
      } else {
        systemErrorMenssage =
          "Ocorreu um erro, por favor tente novamente mais tarde!";
      }

      setLoading(true);
      setError(systemErrorMenssage);
    }
    setLoading(false);
  };

  useEffect(() => {
    return setCancelled(true);
  }, []);

  return {
    auth,
    creatUser,
    error,
    loading,
  };
};
