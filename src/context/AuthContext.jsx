import { useContext, createContext, Children } from "react";

const AuthContext = createContext();

export function AuthProvider({ Children, value }) {
  return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>;
}

export function useAuthValue() {
  return useContext(AuthContext);
}
