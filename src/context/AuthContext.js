import React, { createContext, useEffect, useState } from "react";
import app from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const UserContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Sign up with email and password
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email and password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signin/sign up with gogole pop up
  const googleSignin = () => {
    return signInWithPopup(auth, provider);
  };

  // Update user
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // Log out
  const logout = () => {
    return signOut(auth);
  };

  // User checking
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authValue = {
    signup,
    login,
    user,
    logout,
    updateUser,
    googleSignin,
    loading,
  };
  return (
    <UserContext.Provider value={authValue}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
