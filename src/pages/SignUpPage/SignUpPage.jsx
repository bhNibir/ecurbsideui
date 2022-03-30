import { useMutation } from "@apollo/client";
import { Box, Divider, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import FormPaper from "../../components/StyledComponents/FormPaper";
import LoginPageLayout from "../../layouts/LoginPageLayout";
import { USER_REGISTER } from "./../../gql/gql";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  const [validationError, setValidationError] = useState({});
  const [addTodo, { data, loading: mutationLoading, error: mutationError }] =
    useMutation(USER_REGISTER);

  useEffect(() => {
    if (data) {
      if (data.register.errors) {
        setValidationError(data.register.errors);
        console.log(data.register.errors);
      }
      if (data.register.success) {
        console.log(data.register.success);
      }
    }
  }, [data, mutationLoading]);

  const onSubmitData = (userRegisterData) => {
    addTodo({
      variables: userRegisterData,
    });
    console.log("userRegisterData", userRegisterData);
    console.log("Return Data", data);
    console.log("mutationLoading", mutationLoading);
  };

  if (mutationError) return `Submission error! ${mutationError.message}`;

  return (
    <>
      <LoginPageLayout>
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
            mutationError={mutationError}
            validationError={validationError}
          />
        </FormPaper>
      </LoginPageLayout>
    </>
  );
};

export default SignUpPage;
