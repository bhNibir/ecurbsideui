import { useMutation } from "@apollo/client";
import { Box, Divider, Link, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
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
      if (data.userRegistration.errors) {
        setValidationError(data.userRegistration.errors);
        console.log(data.userRegistration.errors);

        for (const [key, value] of Object.entries(
          data.userRegistration.errors
        )) {
          value.map(({ message }) => handleShowErrorMessage(key, message));
        }
      }
      if (data.userRegistration.success) {
        setShowThankYou(data.userRegistration.success);
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
