import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Box, Divider, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { PASSWORD_RESET } from "../../graphQL/mutations";
import FormPaper from "../StyledComponents/FormPaper";
import InputPassword from "./InputPassword";

const schema = yup
  .object()
  .shape({
    newPassword1: yup
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
    newPassword2: yup
      .string()
      .oneOf([yup.ref("newPassword1"), null], "Passwords must match"),
  })
  .required();

const ResetPassword = ({ token }) => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [
    passwordReset,
    { data, loading: mutationLoading, error: mutationError },
  ] = useMutation(PASSWORD_RESET, {
    onCompleted: (data) => {
      const { success, errors } = data.passwordReset;
      if (success) {
        enqueueSnackbar(` Successfully Reset Password`, {
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
          variant: "success",
        });
        navigate(`/login`);
      } else {
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

  const onSubmitData = (newPass) => {
    newPass.token = token;
    console.log("From Data", newPass);
    console.log("From Data", data);

    passwordReset({
      variables: newPass,
    });
  };

  return (
    <>
      <FormPaper sx={{ mx: 0.5 }} elevation={5}>
        <Box sx={{ mb: 1 }}>
          <Typography
            fontWeight="bold"
            align="center"
            variant="h6"
            gutterBottom
          >
            Change Password
          </Typography>
          <Divider variant="middle" />
        </Box>
        <Box my={3}>
          <form noValidate onSubmit={handleSubmit(onSubmitData)}>
            <Box mb={3}>
              <InputPassword
                name={"newPassword1"}
                control={control}
                label={"New Password"}
              />
              <InputPassword
                name={"newPassword2"}
                control={control}
                label={"Confirm Password"}
                helperText={
                  "Password must have minimum 8 characters, uppercase, lowercase, numbers and symbol."
                }
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
                Change Password
              </LoadingButton>
            </Box>
          </form>
        </Box>
      </FormPaper>
    </>
  );
};

export default ResetPassword;
