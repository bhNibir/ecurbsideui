import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import RatingUser from "./RatingUser";

const RatingView = ({ review }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        marginBottom: 2,
      }}
    >
      <Box padding={2}>
        <Box marginBottom={1}>
          <RatingUser review={review} />
        </Box>

        <Box>
          <Box paddingBottom={1}>
            <Typography variant="body1">{review?.content}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default RatingView;
