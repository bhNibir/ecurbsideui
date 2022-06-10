import { Box, Grid } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import SideMessage from "./SideMessage";

const LoginPageLayout = ({ children }) => {
  const location = useLocation();
  const authLogin = localStorage.getItem("token");

  if (authLogin) {
    const from = location.state?.from?.pathname || "/home";
    return <Navigate to={from} replace={true} />;
  }

  return (
    <>
      <DefaultLayout>
        <Grid item xs={12} sm={10} md={7} xl={7}>
          <Box>
            <SideMessage />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={4} xl={5}>
          {children}
        </Grid>
      </DefaultLayout>
    </>
  );
};

export default LoginPageLayout;
