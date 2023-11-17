import { initializeApp } from "@firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"


const firebaseConfig = {
  apiKey: "AIzaSyDfSLuArHaeKTmrKOY3xmYAfQOgpYOX_8M",
  authDomain: "my-gym-app-50b61.firebaseapp.com",
  projectId: "my-gym-app-50b61",
  storageBucket: "my-gym-app-50b61.appspot.com",
  messagingSenderId: "616174418024",
  appId: "1:616174418024:web:476f0581d677075d34e3dd"
};


const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });