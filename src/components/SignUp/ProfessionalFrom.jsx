import { yupResolver } from "@hookform/resolvers/yup";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    username: yup.string().required("User Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required.")
      .min(
        8,
        "Password must have minimum 8 characters, uppercase, lowercase , numbers and symbol."
      )
      .test(
        "passwordRequirements",
        "Password must have 1 uppercase, 1 lowercase, 1 number, 1 symbol.",
        (value) =>
          [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
            pattern.test(value)
          )
      ),
  })
  .required();

const defaultValues = {
  username: "",
  email: "",
  password: "",
};

const ProfessionalFrom = ({
  validationError,
  mutationLoading,
  handleBack,
  onSubmitData,
}) => {
  const [showPassBtn, setShowPassBtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit((inputData) => onSubmitData(inputData, reset))}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                margin="dense"
                variant="outlined"
                fullWidth
                id="username"
                label="Username"
                name="username"
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

                  validationError?.username?.map(({ message }, index) => (
                    <span key={index}>
                      {message}
                      <br />
                    </span>
                  )),
                ]}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                margin="dense"
                variant="outlined"
                fullWidth
                id="email"
                label="Email address"
                name="email"
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
                  validationError?.email?.map(({ message }, index) => (
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
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                margin="dense"
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                id="password"
                value={value}
                onChange={onChange}
                type={showPassword ? "text" : "password"}
                onFocus={() => setShowPassBtn(true)}
                InputProps={{
                  endAdornment: showPassBtn && (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
                        ) : (
                          <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!!error || !!validationError?.password2}
                helperText={[
                  !error &&
                    !validationError?.password2 &&
                    "Password must have minimum 8 characters, uppercase, lowercase, numbers and symbol.",
                  error && (
                    <span key={error.message.length}>
                      {error.message}
                      <br />
                    </span>
                  ),

                  validationError?.password2?.map(({ message }, index) => (
                    <span key={index}>
                      {message}
                      <br />
                    </span>
                  )),
                ]}
              />
            )}
          />
          <Typography mt={2} variant="caption" display="block" gutterBottom>
            <Box ml={2} component="span">
              By clicking Sign Up, you agree to our{" "}
              <Link to="/">Terms of Service</Link>
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>

        <LoadingButton
          loading={mutationLoading}
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          type="submit"
          color="success"
        >
          Sign Up
        </LoadingButton>
      </Box>
    </form>
  );
};

export default ProfessionalFrom;
