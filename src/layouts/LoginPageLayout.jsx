import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Footer from '../components/Footer/Footer';
import SideMessage from './SideMessage';

const LoginPageLayout = ({ children }) => (
    <>
        <Box sx={{ flexGrow: 1, backgroundColor: '#f0f2f5' }}>
            <Container fixed>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        minHeight: '80vh',

                        py: {
                            xs: 4,
                            sm: 5,
                            md: 10,
                            lg: 12,
                            xl: 13,
                        },
                    }}
                >
                    <Grid item xs={12} md={7}>
                        <Box>
                            <SideMessage />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Footer sx={{ mt: 5, mb: 4 }} />
    </>
);

export default LoginPageLayout;
