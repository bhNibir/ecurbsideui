import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";

const DiseaseFav = ({ row }) => {
  // console.log("favoriteDisease", !!row?.favoriteDisease?.isFavorite);
  const [fav, setFav] = useState(!!row?.favoriteDisease?.isFavorite);

  const handleFav = (event) => {
    event.stopPropagation();
    setFav(!fav);
    // console.log(fav);
  };
  return (
    <Box>
      <IconButton onClick={handleFav} aria-label="favorite">
        {fav ? (
          <FavoriteIcon color="secondary" />
        ) : (
          <FavoriteBorderIcon sx={{}} fontSize="inherit" />
        )}
      </IconButton>
    </Box>
  );
};

export default DiseaseFav;
