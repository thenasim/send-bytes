import type firebase from "firebase";

export type SignUpFieldType = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
};

export type SignInFieldType = {
  email: string;
  password: string;
};

export type DocRefType = firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
