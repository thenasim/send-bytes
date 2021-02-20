import { FIRESTORE } from "../constants";
import { getFirebase } from "./lazyFirebase";
import type { DocRefType, SignUpFieldType } from "../types";

export async function isUsernameExists(username: string) {
  const { db } = await getFirebase();
  const userRef = db.collection(FIRESTORE.users).doc(username);
  const snapshot = await userRef.get();
  return {
    exists: snapshot.exists,
    ref: userRef,
  };
}

export async function setUserProfileData(
  { first_name, last_name, username, email }: SignUpFieldType,
  ref: DocRefType
) {
  await ref.set({
    first_name,
    last_name,
    email,
    username,
  });
}

export async function createNewUser(data: SignUpFieldType) {
  const { auth } = await getFirebase();
  await auth.createUserWithEmailAndPassword(data.email, data.password);
}
