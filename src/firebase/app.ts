import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebaseConfig.ts";

export const app=initializeApp(firebaseConfig);