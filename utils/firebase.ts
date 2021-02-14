import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_F_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_F_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_F_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_F_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_F_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_F_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_F_MESEARUMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };
