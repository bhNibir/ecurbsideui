import React from "react";
import Login from "../../components/Login/Login";
import LoginPageLayout from "../../layouts/LoginPageLayout";

const LoginPage = () => {
  return (
    <>
      <LoginPageLayout>
        <Login />
      </LoginPageLayout>
    </>
  );
};

export default LoginPage;
