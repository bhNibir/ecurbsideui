import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AddDiseasePage from "../pages/DiseasePages/AddDiseasePage";
import FavoritesPage from "../pages/FavoritesPages/FavoritesPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Page404 from "../pages/NotFoundPage/Page404";
import SearchResultPage from "../pages/SearchPages/SearchResultPage";
import ForgetPasswordPage from "../pages/SignUpPage/ForgetPasswordPage";
import ResetPasswordPage from "../pages/SignUpPage/ResetPasswordPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AddTreatmentPage from "../pages/TreatmentPages/AddTreatmentPage";
import DiseaseTreatmentListPage from "../pages/TreatmentPages/DiseaseTreatmentListPage";
import TreatmentDetailPage from "../pages/TreatmentPages/TreatmentDetailPage";
import VerifyAccountPage from "../pages/VerifyAccountPage/VerifyAccountPage";
import ProfilePage from "./../pages/ProfilePages/ProfilePage";
import { AddReviewPage } from "./../pages/ReviewPage/AddReviewPage";
import ProtectedRoute from "./ProtectedRoute";

const AllRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/home"
      element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      }
    />

    <Route
      path="/add-disease"
      element={
        <ProtectedRoute>
          <AddDiseasePage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/diseases"
      element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/disease/:id"
      element={
        <ProtectedRoute>
          <DiseaseTreatmentListPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/disease/:id/add-treatment"
      element={
        <ProtectedRoute>
          <AddTreatmentPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/treatment/:id"
      element={
        <ProtectedRoute>
          <TreatmentDetailPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/add-review/:id"
      element={
        <ProtectedRoute>
          <AddReviewPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/search"
      element={
        <ProtectedRoute>
          <SearchResultPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/favorites"
      element={
        <ProtectedRoute>
          <FavoritesPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/user/:username"
      element={
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      }
    />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/activate/:token" element={<VerifyAccountPage />} />
    <Route path="reset-password" element={<ResetPasswordPage />} />
    <Route path="forget-password" element={<ForgetPasswordPage />} />
    <Route path="/*" element={<Page404 />} />
  </Routes>
);

export default AllRoutes;
