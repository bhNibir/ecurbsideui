import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const VerifyErrorMessage = ({ message }) => (
    <>
        <CardContent>
            <ErrorTwoToneIcon color="error" sx={{ fontSize: 80 }} />
            <Typography
                sx={{ fontWeight: 'medium', my: 2 }}
                align="center"
                variant="h4"
                gutterBottom
            >
                Sorry
            </Typography>
            <Typography sx={{ my: 2 }} variant="subtitle1">
                {message && message}
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
                Back
            </Button>
        </CardActions>
    </>
);

export default VerifyErrorMessage;
