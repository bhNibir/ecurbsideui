import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import RatingUser from "./RatingUser";

const RatingView = ({ createBy, createdAt }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        marginBottom: 2,
      }}
    >
      <Box padding={2}>
        <Box marginBottom={1}>
          <RatingUser createBy={createBy} createdAt={createdAt} />
        </Box>

        <Box>
          <Box paddingBottom={1}>
            <Typography variant="body1">Works great!</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default RatingView;
