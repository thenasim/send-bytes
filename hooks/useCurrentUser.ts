import { useEffect, useState } from "react";
import { getFirebase } from "../utils/lazyFirebase";
import type firebase from "firebase";

export function useCurrentUser() {
  const [user, setUser] = useState<firebase.User | null | undefined>(undefined);

  useEffect(() => {
    async function getUser() {
      const { auth } = await getFirebase();
      auth.onAuthStateChanged((user) => {
        setUser(user);
      });
    }
    getUser();
  }, []);

  return user;
}
