import { createContext, useContext, useState } from "react";

type User = {
  name: string;
  email: string;
};

interface AuthContextType {
  user?: User;
  signin: (user: User, callback?: VoidFunction) => void;
  signout: (callback?: VoidFunction) => void;
}

let AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = useState<User>();

  let signin = (newUser: User, callback?: VoidFunction) => {
    setUser(newUser);
    callback?.();
  };

  let signout = (callback?: VoidFunction) => {
    setUser(undefined);
    callback?.();
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
