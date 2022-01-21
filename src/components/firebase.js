import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDd1yACxu-4cqrzQv1Lmh_bHD9rCp-nPrw",
  authDomain: "proyectoecommreact.firebaseapp.com",
  projectId: "proyectoecommreact",
  storageBucket: "proyectoecommreact.appspot.com",
  messagingSenderId: "688115022716",
  appId: "1:688115022716:web:fc45f954d4e54cbdbec2f9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);