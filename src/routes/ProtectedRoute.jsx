import { useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import {
  Navigate,
  useLocation,
  useNavigate,
  useOutlet,
} from "react-router-dom";
import LoadingIndicator from "../components/common/LoadingIndicator";
import { GET_ME } from "../graphQL/queries";
import useAuth from "./../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const authLogin = localStorage.getItem("token");
  const { loggedInUser, login, logout } = useAuth();
  const outlet = useOutlet();

  const { loading: meLoading, error: meError } = useQuery(GET_ME, {
    onCompleted: (data) => {
      login(data.me);
      // console.log("Me: ", data.me);
    },
    onError: (error) => {
      console.log("GET_ME Query Error ", error);
      if (
        error.message.match("Login Required") ||
        error.message.match("Authorization Required")
      ) {
        enqueueSnackbar(`${error.message} Please Login again.`, {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
        logout();
        navigate("/login");
      } else {
        enqueueSnackbar(`${error.message}`, {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
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
