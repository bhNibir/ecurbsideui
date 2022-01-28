import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = (props) => (
    <>
        <Box sx={{ my: (theme) => theme.spacing(3) }}>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="primary" component={RouterLink} to="/">
                    Ecurbside
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    </>
);

export default Footer;
