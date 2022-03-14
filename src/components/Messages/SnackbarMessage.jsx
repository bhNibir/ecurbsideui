import { AlertTitle } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import React from "react";

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const SnackbarMessage = ({ open, setOpen, message }) => {
  const handleClose = () => {
    console.log("handleClose");
    setOpen(!open);
  };

  return (
    <div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={Boolean(open)}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            <AlertTitle>Error</AlertTitle>
            <strong>{message}</strong>
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default SnackbarMessage;
