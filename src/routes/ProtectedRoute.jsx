import { useQuery } from "@apollo/client";
import { Navigate, useLocation, useOutlet } from "react-router-dom";
import LoadingIndicator from "../components/common/LoadingIndicator";
import { GET_ME } from "../graphQL/queries";
import useAuth from "./../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const authLogin = localStorage.getItem("token");
  const { loggedInUser, login } = useAuth();
  const outlet = useOutlet();

  const { loading: meLoading, error: meError } = useQuery(GET_ME, {
    onCompleted: (data) => {
      login(data.me);
      // console.log("Me: ", data.me);
    },
    onError: (error) => {
      console.log("GET_ME Query Error ", error);
    },
  });

  if (meLoading) {
    return <LoadingIndicator />;
  }
  if (!authLogin) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
  return outlet;
};

export default ProtectedRoute;
