import { useMutation } from "@apollo/client";
import { LoadingButton } from "@mui/lab";
import { Box, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { USER_REGISTER } from "./../../gql/gql";

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//         borderRadius: '8px',
//     },
//     button: {
//         fontWeight: 'bold',
//     },
// }));

const SignUpForm = () => {
  const { control, handleSubmit } = useForm();
  const [validationError, setValidationError] = useState({});

  const [addTodo, { data, loading: mutationLoading, error: mutationError }] =
    useMutation(USER_REGISTER);

  const onSubmitData = (userRegisterData) => {
    addTodo({
      variables: userRegisterData,
    });
    console.log("userRegisterData", userRegisterData);
    console.log("Return Data", data);
    console.log("mutationLoading", mutationLoading);
  };

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

  if (mutationError) return `Submission error! ${mutationError.message}`;
  return (
    <>
      <div>
        <form noValidate onSubmit={handleSubmit(onSubmitData)}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    size="small"
                    margin="none"
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="text"
                  />
                )}
                rules={{ required: "First Name required" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    size="small"
                    margin="none"
                    autoComplete="lname"
                    name="lastName"
                    variant="outlined"
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="text"
                  />
                )}
                rules={{ required: "Last Name required" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    size="small"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    value={value}
                    onChange={onChange}
                    type="text"
                    error={!!error || !!validationError?.username}
                    helperText={[
                      error && (
                        <span key={error.message.length}>
                          {error.message}
                          <br />
                        </span>
                      ),

                      validationError.username?.map(({ message }, index) => (
                        <span key={index}>
                          {message}
                          <br />
                        </span>
                      )),
                    ]}
                  />
                )}
                rules={{
                  required: { value: true, message: "Username required" },
                  // mixLength: { value: 4, message: 'error message' },
                }}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    size="small"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email address"
                    name="email"
                    autoComplete="email"
                    value={value}
                    onChange={onChange}
                    error={!!error || !!validationError?.email}
                    helperText={[
                      error && (
                        <span key={error.message.length}>
                          {error.message}
                          <br />
                        </span>
                      ),
                      validationError.email?.map(({ message }, index) => (
                        <span key={index}>
                          {message}
                          <br />
                        </span>
                      )),
                    ]}
                    type="email"
                  />
                )}
                rules={{ required: "Email required" }}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    size="small"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={value}
                    onChange={onChange}
                    error={!!error || !!validationError?.password2}
                    helperText={[
                      error && (
                        <span key={error.message.length}>
                          {error.message}
                          <br />
                        </span>
                      ),

                      validationError.password2?.map(({ message }, index) => (
                        <span key={index}>
                          {message}
                          <br />
                        </span>
                      )),
                    ]}
                  />
                )}
                rules={{
                  required: { value: true, message: "Password required" },
                  minLength: {
                    value: 8,
                    message:
                      "Password must have uppercase, lowercase, numbers and minimum 8 characters.",
                  },
                }}
              />
            </Grid>

            <Typography mt={2} variant="caption" display="block" gutterBottom>
              <Box ml={2} component="span">
                By clicking Sign Up, you agree to our{" "}
                <Link to="/">Terms of Service</Link>
              </Box>
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Box my={1} mt={2}>
              <LoadingButton
                loading={mutationLoading}
                type="submit"
                variant="contained"
                color="success"
              >
                Sign Up
              </LoadingButton>
            </Box>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
