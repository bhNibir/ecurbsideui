import { useMutation } from "@apollo/client";
import { Box, Divider, Link, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ThankYouMessage from "../../components/AlertMessages/ThankYouMessage";
import FormPaper from "../../components/StyledComponents/FormPaper";
import { USER_REGISTER } from "./../../gql/gql";
import ManageStep from "./ManageStep";

const steps = ["Account Details", "Professional details"];

const SignUp = () => {
  const [validationError, setValidationError] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [activeStep, setActiveStep] = React.useState(0);

  const [addUserData, { data, loading: mutationLoading }] = useMutation(
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

        for (const [key, value] of Object.entries(data.register.errors)) {
          value.map(({ message }) => handleShowErrorMessage(key, message));
        }
      }
      if (data.register.success) {
        setShowThankYou(data.register.success);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, mutationLoading]);

  const handleShowErrorMessage = (name, message) => {
    enqueueSnackbar(`${name}: ${message}`, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      variant: "error",
    });
  };
  const onSubmitData = (userRegisterData, resetFrom) => {
    addUserData({
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
      {activeStep === steps.length - 1 && showThankYou ? (
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
          {/* <SignUpForm
            onSubmitData={onSubmitData}
            mutationLoading={mutationLoading}
            validationError={validationError}
          /> */}

          <ManageStep
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            onSubmitData={onSubmitData}
            mutationLoading={mutationLoading}
            validationError={validationError}
          />
        </FormPaper>
      )}
    </>
  );
};

export default SignUp;
