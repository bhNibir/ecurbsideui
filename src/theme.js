import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#0984e3',
        },
        secondary: {
            main: '#f50057',
        },
    },
    spacing: 8,
});

export default theme;
