import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  console.log("Call AuthProvider");
  const [loggedInUser, setLoggedInUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const login = (data) => {
    const userObj = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      profilePicture: data.profilePicture,
      country: data.country,
      healthProvider: data.healthProvider,
      medicalProviderType: data.medicalProviderType,
      medicalSpecialty: data.medicalSpecialty,
      medicalSetting: data.medicalSetting,
    };
    setLoggedInUser(userObj);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setLoggedInUser({});
    navigate("/login", { replace: true });
  };

  // const value = useMemo(
  //   () => ({
  //     loggedInUser,
  //     login,
  //     logout,
  //   }),
  //   [user]
  // );

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
