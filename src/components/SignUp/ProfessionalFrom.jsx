import { Box, Link, Typography } from "@mui/material";
import React from "react";

const ProfessionalFrom = () => {
  return (
    <>
      <div>ProfessionalFrom</div>
      <div>ProfessionalFrom</div>
      <Typography mt={2} variant="caption" display="block" gutterBottom>
        <Box ml={2} component="span">
          By clicking Sign Up, you agree to our{" "}
          <Link to="/">Terms of Service</Link>
        </Box>
      </Typography>
    </>
  );
};

export default ProfessionalFrom;
