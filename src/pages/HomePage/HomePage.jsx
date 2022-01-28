import React from 'react';
import Diseases from '../../components/Diseases/Diseases';
import HomeHero from '../../components/HomeHero/HomeHero';
import { MainLayout } from '../../layouts/MainLayout';

const HomePage = () => (
    <>
        <MainLayout>
            <HomeHero />
            <Diseases />
        </MainLayout>
    </>
);

export default HomePage;
