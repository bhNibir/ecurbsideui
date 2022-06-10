import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  console.log("Call AuthProvider");
  const [loggedInUser, setLoggedInUser] = useState(null);
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
      medicalProviderTypeId: data.medicalProviderTypeId,
      medicalSpecialty: data.medicalSpecialty,
      medicalSettingId: data.medicalSettingId,
    };
    setLoggedInUser(userObj);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setLoggedInUser(null);
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
