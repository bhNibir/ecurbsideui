import { Paper, styled } from '@mui/material';
import React from 'react';

const CustomizePaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '8px',
}));

const FormPaper = (props) => (
    <>
        <CustomizePaper {...props} />
    </>
);

export default FormPaper;
