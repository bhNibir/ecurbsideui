import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import * as yup from "yup";
import { SEND_PASSWORD_RESET_EMAIL } from "../../graphQL/mutations";
import ThankYouMessage from "../AlertMessages/ThankYouMessage";
import FormPaper from "../StyledComponents/FormPaper";

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required("Email is required"),
  })
  .required();

const ForgetPassEmail = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const [userEmail, setUserEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const [
    sendPasswordResetEmail,
    { data, loading: mutationLoading, error: mutationError },
  ] = useMutation(SEND_PASSWORD_RESET_EMAIL, {
    onCompleted: (data) => {
      const { success, errors } = data.sendPasswordResetEmail;
      if (!success) {
        const errorArrayList = Object.keys(errors).map(
          (error) => errors[error]
        );
        errorArrayList.map((errorArray) => {
          errorArray.map(({ message }) => {
            enqueueSnackbar(message, {
              variant: "error",
              anchorOrigin: {
                vertical: "top",
                horizontal: "right",
              },
            });
          });
        });
      }
    },
    onError: (error) => {
      console.log(error);
      enqueueSnackbar(error.message, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    },
  });

  console.log(data, mutationError);
  const onSubmitData = (userData) => {
    console.log("From Data", userData);
    setUserEmail(() => userData.email);

    sendPasswordResetEmail({
      variables: userData,
    });
  };

  return (
    <>
      {data?.sendPasswordResetEmail?.success ? (
        <ThankYouMessage
          email={userEmail}
          titleText={"Please check your Emails."}
          subtileText={`We have sent a password reset email to ${userEmail}`}
        />
      ) : (
        <>
          <FormPaper sx={{ mx: 0.5 }} elevation={5}>
            <Box sx={{ mb: 1 }}>
              <Typography
                fontWeight="bold"
                align="center"
                variant="h6"
                gutterBottom
              >
                Forget Password
              </Typography>
              <Divider variant="middle" />
            </Box>
            <Box mt={3}>
              <form noValidate onSubmit={handleSubmit(onSubmitData)}>
                <Box mb={3}>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        variant="outlined"
                        margin="dense"
                        size="small"
                        fullWidth
                        id="email"
                        label="Email address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        type="email"
                      />
                    )}
                    rules={{ required: "Email required" }}
                  />
                </Box>
                <Box my={2}>
                  <LoadingButton
                    loading={mutationLoading}
                    type="submit"
                    size="medium"
                    fullWidth
                    color="success"
                    variant="contained"
                    disableElevation
                  >
                    Send
                  </LoadingButton>
                </Box>
                <Divider variant="middle" />
                <Box mt={2}>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    disableElevation
                    sx={{
                      fontWeight: "bold",
                    }}
                    component={RouterLink}
                    to="/login"
                  >
                    Login
                  </Button>
                </Box>
              </form>
            </Box>
          </FormPaper>
        </>
      )}
    </>
  );
};

export default ForgetPassEmail;
