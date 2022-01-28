import { AlertTitle } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';

const Alert = React.forwardRef((props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const SnackbarMessage = ({ message }) => {
    const [open, setOpen] = useState(message);

    // const handleClick = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        // if (reason === 'clickaway') {
        // return;
        // }

        setOpen('');
    };

    return (
        <div>
            <Stack spacing={2} sx={{ width: '100%' }}>
                {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}

                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        <AlertTitle>Error</AlertTitle>
                        Error — <strong>{message}</strong>
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    );
};

export default SnackbarMessage;
