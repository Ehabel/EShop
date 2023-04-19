import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAAOJo654FaYyvA8_d-XSakN2KCPb02BH8",
    authDomain: "eshop-55ddd.firebaseapp.com",
    projectId: "eshop-55ddd",
    storageBucket: "eshop-55ddd.appspot.com",
    messagingSenderId: "815170448184",
    appId: "1:815170448184:web:f56b27e7eab2c9b838afcd",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
