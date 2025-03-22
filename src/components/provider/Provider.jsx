/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../../../firebase.config";

export const AuthContext = createContext(null);
const Provider = ({ children }) => {
  // sing up with email and password
  const singUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //    singh in email and password
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    singUp,
    singIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
