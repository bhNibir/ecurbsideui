import { Box, Divider, Link, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import FormPaper from "../../components/StyledComponents/FormPaper";
import LoginPageLayout from "../../layouts/LoginPageLayout";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
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
          <SignUpForm />
        </FormPaper>
      </LoginPageLayout>
    </>
  );
};

export default SignUpPage;
