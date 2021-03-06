import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import React from "react";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff3d47",
  },
});

const TreatmentRating = ({ id, value }) => {
  return (
    <>
      <StyledRating
        size="large"
        name="customized-color"
        defaultValue={0}
        value={value}
        readOnly
        sx={{ fontSize: 30 }}
        icon={<StarRoundedIcon fontSize="inherit" />}
        emptyIcon={<StarOutlineRoundedIcon fontSize="inherit" />}
      />
    </>
  );
};

export default TreatmentRating;
