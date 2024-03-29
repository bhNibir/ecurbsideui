import { useMutation } from "@apollo/client";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import SnackbarMessage from "../../components/AlertMessages/SnackbarMessage";
import FormPaper from "../../components/StyledComponents/FormPaper";
import { AUTH_TOKEN } from "../../graphQL/mutations";
import LoginForm from "./LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  const [tokenAuth, { data, loading: mutationLoading, error: mutationError }] =
    useMutation(AUTH_TOKEN, {
      onCompleted(result) {
        if (result?.tokenAuth?.token) {
          window.localStorage.setItem("token", result?.tokenAuth?.token);

          const from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });
          console.log(data, mutationError);
        } else {
          console.log(data, mutationError);
          setErrorMessage(result?.tokenAuth?.errors?.nonFieldErrors[0].message);
        }
      },
    });

  const onSubmitData = (userData) => {
    console.log("From Data", userData);
    console.log("errorMessage", errorMessage);
    // window.localStorage.setItem('token', true);

    tokenAuth({
      variables: userData,
    });
  };

  return (
    <>
      {errorMessage && (
        <SnackbarMessage
          message={errorMessage}
          open={errorMessage}
          setOpen={setErrorMessage}
        />
      )}
      <FormPaper sx={{ mx: 0.5 }} elevation={5}>
        <Box sx={{ mb: 1 }}>
          <Typography
            align="center"
            sx={{ color: (theme) => theme.palette.textColor }}
            variant="body1"
            fontWeight="bold"
          >
            Login to
          </Typography>
          <Typography
            fontWeight="bold"
            align="center"
            variant="h4"
            color="primary"
            gutterBottom
          >
            Ecubside
          </Typography>
          <Box sx={{ p: 1, mb: 1, border: '1px dashed grey' }}>
            <Typography
              variant="body2"
              sx={{ pb: 1 }}
              gutterBottom
            >
              user :

              <strong> admin@test.com</strong>

              <br />
              password :

              <strong> password</strong>

            </Typography>
          </Box>
          <Divider variant="middle" />
        </Box>
        <LoginForm
          onSubmitData={onSubmitData}
          mutationLoading={mutationLoading}
        />
        <Box mt={1} mb={2}>
          <Link
            component={RouterLink}
            underline="hover"
            to="/forget-password"
            variant="body2"
          >
            Forgot password?
          </Link>
        </Box>

        <Divider variant="middle" />
        <Box mt={3} my={2}>
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            disableElevation
            sx={{
              fontWeight: "bold",
            }}
            component={RouterLink}
            to="/sign-up"
          >
            Create New Account
          </Button>
        </Box>
      </FormPaper>
    </>
  );
};

export default Login;
