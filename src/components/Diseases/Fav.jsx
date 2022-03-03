import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton } from "@mui/material";
import React from "react";

const Fav = () => {
  return (
    <Box>
      <IconButton aria-label="favorite" color="#ff3d47">
        <FavoriteIcon />
      </IconButton>
    </Box>
  );
};

export default Fav;
