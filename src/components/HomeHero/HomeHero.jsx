import { Grid, Box } from '@mui/material';
import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import bgImage from '../../assets/images/bg.svg';

const HomeHero = () => (
    <>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <Grid item align="center" m="auto" lg={6} md={10}>
                <Box my={12} py={12}>
                    <SearchBox />
                </Box>
            </Grid>
        </Grid>
    </>
);

export default HomeHero;
