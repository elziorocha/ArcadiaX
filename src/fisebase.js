// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAptx__GHGBvf2aduoIQVGRmSJ6jK1AhOk",
  authDomain: "testecrud-9a452.firebaseapp.com",
  projectId: "testecrud-9a452",
  storageBucket: "testecrud-9a452.appspot.com",
  messagingSenderId: "148367518438",
  appId: "1:148367518438:web:31dbdf27728ffaf3656927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);