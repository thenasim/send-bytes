import { useEffect, useState } from "react";
import { getFirebase } from "../utils/lazyFirebase";
import type firebase from "firebase";

export function useCurrentUser() {
  const [user, setUser] = useState<firebase.User | null | undefined>(undefined);

  useEffect(() => {
    let unsubscribe: firebase.Unsubscribe | undefined;

    async function getUser() {
      const { auth } = await getFirebase();
      unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
      });
    }
    getUser();

    return () => unsubscribe && unsubscribe();
  }, []);

  return user;
}
