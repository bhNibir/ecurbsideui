import { Container, Box } from '@mui/material';
import React from 'react';
import Footer from '../components/Footer/Footer';
import MenuBar from '../components/Header/MenuBar';

// This main Layout Component All Component rapped by this componet

// eslint-disable-next-line import/prefer-default-export
export const MainLayout = ({ children }) => (
    <>
        <Box
            sx={{
                backgroundColor: '#F4FDFB',
            }}
        >
            <MenuBar />

            <Container
                maxWidth="lg"
                sx={{
                    pt: (theme) => theme.spacing(1),
                    pb: (theme) => theme.spacing(4),
                }}
            >
                {children}
            </Container>
        </Box>
        <Footer />
    </>
);
