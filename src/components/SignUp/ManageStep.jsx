import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import StepOption from "./StepOption";

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    username: yup.string().required("User Name is required"),
    email: yup.string().email().required("Email is required"),

    password: yup
      .string()
      .required("Password is required.")
      .min(
        8,
        "Password must have minimum 8 characters, uppercase, lowercase and numbers."
      )
      .test(
        "passwordRequirements",
        "Password must have 1 uppercase, 1 lowercase, 1 number.",
        (value) =>
          [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
            pattern.test(value)
          )
      ),
  })
  .required();

const ManageStep = ({
  steps,
  activeStep,
  setActiveStep,
  onSubmitData,
  mutationLoading,
  validationError,
}) => {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleNext = (userData) => {
    setActiveStep(activeStep + 1);
    console.log(userData);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <form
        // noValidate
        onSubmit={handleSubmit((userData) => onSubmitData(userData, reset))}
      >
        <StepOption step={activeStep} control={control} />

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
              Back
            </Button>
          )}

          {activeStep !== steps.length - 1 && (
            <Button
              variant="contained"
              sx={{ mt: 3, ml: 1 }}
              onClick={handleSubmit((userData) => handleNext(userData))}
              type="button"
            >
              Next
            </Button>
          )}

          {activeStep === steps.length - 1 && (
            <LoadingButton
              loading={mutationLoading}
              variant="contained"
              sx={{ mt: 3, ml: 1 }}
              type="submit"
              color="success"
            >
              Sign Up
            </LoadingButton>
          )}
        </Box>
      </form>
    </>
  );
};

export default ManageStep;
