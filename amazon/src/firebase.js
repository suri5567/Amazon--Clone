// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCSTPBL3IF3Ob-hGax_1ATOVJAvyhUCQEk",
  authDomain: "firbase-affa1.firebaseapp.com",
  projectId: "firbase-affa1",
  storageBucket: "firbase-affa1.appspot.com",
  messagingSenderId: "368939221928",
  appId: "1:368939221928:web:ce3e2920420bf3ece9939d",
  measurementId: "G-Q8STXP3VGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth}