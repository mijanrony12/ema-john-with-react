import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initialAuthentication;