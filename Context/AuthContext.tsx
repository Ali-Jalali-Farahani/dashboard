import { createContext } from "react";

interface AuthContextType {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);