import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNFdUwULONGuoR9ekFjUKQ3Zhue_1HyU8",
  authDomain: "shopping-db-39592.firebaseapp.com",
  projectId: "shopping-db-39592",
  storageBucket: "shopping-db-39592.appspot.com",
  messagingSenderId: "806068399932",
  appId: "1:806068399932:web:b70946f88e442f56def839",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
