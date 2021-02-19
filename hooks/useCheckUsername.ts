import { useEffect, useState } from "react";
import { getFirebase } from "../utils/lazyFirebase";
import { FIRESTORE } from "../constants";

export function useCheckUsername(username: string) {
  const [userExists, setUserExists] = useState<boolean>(false);

  console.log("useCheckUsername");

  useEffect(() => {
    async function getUser() {
      const { db } = await getFirebase();
      const ref = db.collection(FIRESTORE.users).doc(username);
      ref.get().then((docSnap) => {
        setUserExists(docSnap.exists);
      });
    }
    getUser();
  }, []);

  return userExists;
}
