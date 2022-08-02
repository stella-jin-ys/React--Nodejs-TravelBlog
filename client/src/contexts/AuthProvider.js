import React, { useState, useContext } from "react";
import { auth } from "../config/firebase";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const value = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
