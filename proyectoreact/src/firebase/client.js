import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCm7scwlb0o59cSzwGwSCjM42KNMwx_A60",
    authDomain: "decocemento-proyectoreact.firebaseapp.com",
    projectId: "decocemento-proyectoreact",
    storageBucket: "decocemento-proyectoreact.appspot.com",
    messagingSenderId: "232874329940",
    appId: "1:232874329940:web:c3ea8bdefb4871aeeeaac1"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);