import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import AddTreatmentPage from '../pages/AddTreatmentPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import Page404 from '../pages/Page404';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import SearchResultPage from '../pages/SearchResultPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import VerifyAccountPage from '../pages/VerifyAccountPage/VerifyAccountPage';
import ProtectedRoute from './ProtectedRoute';
import AddDiseasePage from '../pages/AddDiseasePage/AddDiseasePage';

const AllRoutes = () => (
    <Routes>
        <Route
            path="/"
            element={
                <ProtectedRoute auth>
                    <HomePage />
                </ProtectedRoute>
            }
        />
        <Route
            path="/home"
            element={
                <ProtectedRoute auth>
                    <HomePage />
                </ProtectedRoute>
            }
        />
        <Route path="about" element={<AboutPage />} />
        <Route path="add-disease" element={<AddDiseasePage />} />
        <Route path="add-treatment" element={<AddTreatmentPage />} />
        <Route path="search" element={<SearchResultPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="/activate/:token" element={<VerifyAccountPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
        <Route path="/*" element={<Page404 />} />
    </Routes>
);

export default AllRoutes;
