// import { gql, useMutation } from '@apollo/client';
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const LoginForm = ({ onSubmitData, mutationLoading }) => {
  const { control, handleSubmit } = useForm();

  return (
    <>
      <div>
        <form noValidate onSubmit={handleSubmit(onSubmitData)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
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
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                variant="outlined"
                margin="dense"
                size="small"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Password required" }}
          />
          {/* {mutationLoading && <LinearProgress />} */}
          <Box my={1}>
            <LoadingButton
              loading={mutationLoading}
              type="submit"
              size="medium"
              fullWidth
              color="primary"
              variant="contained"
              disableElevation
            >
              Login
            </LoadingButton>
          </Box>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
