import { useParams } from "react-router-dom";
import ResetPassword from "../../components/PasswordReset/ResetPassword";
import LoginPageLayout from "../../layouts/LoginPageLayout";

const ResetPasswordPage = () => {
  const { token } = useParams();
  return (
    <>
      <LoginPageLayout>
        <ResetPassword token={token} />
      </LoginPageLayout>
    </>
  );
};

export default ResetPasswordPage;
