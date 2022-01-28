import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React from 'react';

const CustomizeButton = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    transition: 'transform 0.2s',
    fontWeight: 'bold',
    lineHeight: 1,
    '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.1)',
        backgroundColor: 'inherit',
    },
    '&:active': {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    // '& .MuiButton-startIcon': {
    //     marginRight: '2px',
    // },
}));

const NavBtn = (props) => (
    <>
        <CustomizeButton {...props} />
    </>
);

export default NavBtn;
