import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import LoginPageLayout from "../../layouts/LoginPageLayout";

const SignUpPage = () => {
  return (
    <>
      <LoginPageLayout>
        <SignUp />
      </LoginPageLayout>
    </>
  );
};

export default SignUpPage;
