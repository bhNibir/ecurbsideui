import { createContext, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  console.log("Call AuthProvider");
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const login = (data) => {
    setUser(data);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setUser({});
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
