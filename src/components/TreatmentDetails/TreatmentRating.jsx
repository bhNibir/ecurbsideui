import LocalActivityRoundedIcon from "@mui/icons-material/LocalActivityRounded";
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
        name="customized-color"
        defaultValue={0}
        value={value}
        readOnly
        sx={{ fontSize: 30 }}
        icon={<LocalActivityRoundedIcon fontSize="inherit" />}
        emptyIcon={<LocalActivityRoundedIcon fontSize="inherit" />}
      />
    </>
  );
};

export default TreatmentRating;
