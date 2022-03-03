import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton } from "@mui/material";
import React from "react";

const DiseaseFav = () => {
  return (
    <Box>
      <IconButton aria-label="favorite" color="secondary">
        <FavoriteIcon />
      </IconButton>
    </Box>
  );
};

export default DiseaseFav;
