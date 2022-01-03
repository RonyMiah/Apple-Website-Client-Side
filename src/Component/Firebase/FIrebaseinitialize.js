import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebaseconfig";

const firebaseinitialize = () => {
  initializeApp(firebaseConfig);
}
export default firebaseinitialize;
