const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_F_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_F_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_F_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_F_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_F_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_F_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_F_MESEARUMENT_ID,
};

export const getFirebase = async () => {
  const firebase = await (await import("firebase/app")).default;
  await Promise.all([import("firebase/auth"), import("firebase/firestore")]);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return {
    firebase,
    auth: firebase.auth(),
    db: firebase.firestore(),
  };
};
