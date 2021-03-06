import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AddDiseasePage from "../pages/DiseasePages/AddDiseasePage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Page404 from "../pages/NotFoundPage/Page404";
import ForgetPasswordPage from "../pages/PasswordResetPages/ForgetPasswordPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AddTreatmentPage from "../pages/TreatmentPages/AddTreatmentPage";
import DiseaseTreatmentListPage from "../pages/TreatmentPages/DiseaseTreatmentListPage";
import TreatmentDetailPage from "../pages/TreatmentPages/TreatmentDetailPage";
import VerifyAccountPage from "../pages/VerifyAccountPage/VerifyAccountPage";
import ResetPasswordPage from "./../pages/PasswordResetPages/ResetPasswordPage";
import ProfilePage from "./../pages/ProfilePages/ProfilePage";
import { AddReviewPage } from "./../pages/ReviewPage/AddReviewPage";
import ProtectedRoute from "./ProtectedRoute";

const AllRoutes = () => (
  <Routes>
    <Route path="/about" element={<AboutPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/activate/:token" element={<VerifyAccountPage />} />
    <Route path="/password-reset/:token" element={<ResetPasswordPage />} />
    <Route path="/forget-password" element={<ForgetPasswordPage />} />

    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/add-disease" element={<AddDiseasePage />} />
      <Route path="/diseases" element={<HomePage />} />
      <Route path="/disease/:id" element={<DiseaseTreatmentListPage />} />
      <Route path="/disease/:id/add-treatment" element={<AddTreatmentPage />} />
      <Route path="/treatment/:id" element={<TreatmentDetailPage />} />
      <Route path="/add-review/:id" element={<AddReviewPage />} />
      {/* <Route path="/search" element={<SearchResultPage />} /> */}
      <Route path="/search" element={<HomePage />} />
      {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
      <Route path="/favorites" element={<HomePage />} />
      <Route path="/user/:username" element={<ProfilePage />} />
    </Route>
    <Route path="/*" element={<Page404 />} />
  </Routes>
);

export default AllRoutes;
