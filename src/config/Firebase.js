// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3XDqS00E_aO8vBsG2OIpRb6duFnz5bzc",
    authDomain: "nativeapp-1.firebaseapp.com",
    projectId: "nativeapp-1",
    storageBucket: "nativeapp-1.appspot.com",
    messagingSenderId: "34371671086",
    appId: "1:34371671086:web:658f034fa707ea99097bbf",
    measurementId: "G-18DBCLX03M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});