import { useMutation } from "@apollo/client";
import { Box, Divider, Link, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ThankYouMessage from "../../components/AlertMessages/ThankYouMessage";
import FormPaper from "../../components/StyledComponents/FormPaper";
import { USER_REGISTRATION } from "../../graphQL/mutations";
import ManageStep from "./ManageStep";

const steps = ["Account Details", "Professional details"];

const SignUp = () => {
  const [validationError, setValidationError] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [activeStep, setActiveStep] = React.useState(0);
  const [userData, setUserData] = React.useState({
    firstName: "",
    lastName: "",
    country: "",
    healthProvider: true,
    medicalProviderType: "",
    medicalSpecialty: [],
    medicalSetting: "",
    username: "",
    email: "",
    password: "",
  });

  const [submitUserData, { data, loading: mutationLoading }] = useMutation(
    USER_REGISTRATION,
    {
      onCompleted: (data) => {
        const { success, errors } = data.userRegistration;
        // set server validation error
        if (success) {
          setShowThankYou(success);
        } else {
          setValidationError(errors);
          console.log(errors);

          for (const [key, value] of Object.entries(errors)) {
            value.map(({ message }) => handleShowErrorMessage(key, message));
          }
        }
      },
      onError: (error) => {
        enqueueSnackbar(error.message, {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      },
    }
  );

  const handleShowErrorMessage = (name, message) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      variant: "error",
    });
  };

  const onSubmitData = (inputData, resetFrom) => {
    const userObj = {
      ...userData,
      username: inputData?.username,
      email: inputData?.email,
      password: inputData?.password,
    };

    console.log(userObj);
    submitUserData({
      variables: userObj,
    });

    // email for ThankYouMessage
    setUserEmail(userObj?.email);

    // from reset after successfully submit
    if (data?.userRegistration?.success) {
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
          <ManageStep
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            onSubmitData={onSubmitData}
            mutationLoading={mutationLoading}
            validationError={validationError}
            userData={userData}
            setUserData={setUserData}
          />
        </FormPaper>
      )}
    </>
  );
};

export default SignUp;
