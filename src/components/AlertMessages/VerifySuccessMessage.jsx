import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const VerifySuccessMessage = ({ title, message }) => (
    <>
        <CardContent>
            <CheckCircleTwoToneIcon color="success" sx={{ fontSize: 80 }} />
            <Typography
                sx={{ fontWeight: 'medium', my: 2 }}
                align="center"
                variant="h4"
                gutterBottom
            >
                {title || 'Thank You'}
            </Typography>
            <Typography sx={{ my: 2 }} variant="subtitle1">
                {message || 'You have verified your email'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button
                component={RouterLink}
                to="/login"
                sx={{ mx: 'auto', mb: 2 }}
                variant="contained"
                color="primary"
            >
                Continue
            </Button>
        </CardActions>
    </>
);

export default VerifySuccessMessage;
