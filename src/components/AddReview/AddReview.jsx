import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AddReview = () => {
  return (
    <>
      <Paper sx={{ mt: 2, mb: 2, borderRadius: 5 }} elevation={3}>
        <Box paddingX={6} paddingY={3}>
          <Typography variant="h6"> Add Review</Typography>
        </Box>
        <Box paddingX={6} paddingBottom={3}>
          From
        </Box>
      </Paper>
    </>
  );
};

export default AddReview;
