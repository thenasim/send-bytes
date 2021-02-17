import { useEffect, useState } from "react";
import { getFirebase } from "../utils/lazyFirebase";
import type firebase from "firebase";

export function useCurrentUser() {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    async function getUser() {
      const firebase = await getFirebase();
      firebase.auth().onAuthStateChanged((user) => {
        setUser(user);
      });
    }
    getUser();
  }, []);

  return user;
}
