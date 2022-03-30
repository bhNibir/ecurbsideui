import { useMutation } from "@apollo/client";
import { Box, Divider, Link, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ThankYouMessage from "../../components/AlertMessages/ThankYouMessage";
import FormPaper from "../../components/StyledComponents/FormPaper";
import LoginPageLayout from "../../layouts/LoginPageLayout";
import { USER_REGISTER } from "./../../gql/gql";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  const [validationError, setValidationError] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [addTodo, { data, loading: mutationLoading }] = useMutation(
    USER_REGISTER,
    {
      onError: (error) => {
        enqueueSnackbar(`Submission error! ${error.message}`, {
          variant: "error",
        });
      },
    }
  );

  useEffect(() => {
    if (data) {
      // set server validation error
      if (data.register.errors) {
        setValidationError(data.register.errors);
        console.log(data.register.errors);
      }
      if (data.register.success) {
        setShowThankYou(data.register.success);
      }
    }
  }, [data, mutationLoading]);

  const onSubmitData = (userRegisterData, resetFrom) => {
    addTodo({
      variables: userRegisterData,
    });

    // email for ThankYouMessage
    setUserEmail(userRegisterData?.email);

    // from reset after successfully submit
    if (data?.register?.success) {
      resetFrom();
    }
  };

  return (
    <>
      <LoginPageLayout>
        {showThankYou ? (
          <ThankYouMessage
            email={userEmail}
            titleText={" Thank You for Joining Us 😊!"}
          />
        ) : (
          <FormPaper elevation={5}>
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Typography
                align="center"
                sx={{ color: (theme) => theme.palette.textColor }}
                variant="h4"
                gutterBottom
              >
                Join
              </Typography>
              <Typography
                align="center"
                variant="body2"
                sx={{ pb: 1 }}
                gutterBottom
              >
                Already have an account?
                <Link component={RouterLink} underline="none" to="/login">
                  <strong> Login</strong>
                </Link>
              </Typography>
              <Divider variant="middle" />
            </Box>
            <SignUpForm
              onSubmitData={onSubmitData}
              mutationLoading={mutationLoading}
              validationError={validationError}
            />
          </FormPaper>
        )}
      </LoginPageLayout>
    </>
  );
};

export default SignUpPage;
