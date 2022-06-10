import { useQuery } from "@apollo/client";
import { Navigate, useLocation, useOutlet } from "react-router-dom";
import { GET_ME } from "../graphQL/queries";
import useAuth from "./../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const authLogin = localStorage.getItem("token");
  const { user, login } = useAuth();
  const outlet = useOutlet();

  const { loading: meLoading, error: meError } = useQuery(GET_ME, {
    onCompleted: (data) => {
      login(data.me);
      console.log("Me: ", data.me);
    },
    // onError: (error) => {
    //   window.localStorage.removeItem("token");
    //   navigate("/");
    //   console.log(error.code);
    // },
  });

  console.log("ProtectedRoute: ", user);
  if (!authLogin) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
  return outlet;
};

export default ProtectedRoute;
