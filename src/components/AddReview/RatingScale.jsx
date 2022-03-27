import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import React from "react";

const labels = {
  1: "Harmful",
  2: "No benefit",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff3d47",
  },
});

const RatingScale = ({ value, onChange, error }) => {
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <StyledRating
        size="large"
        name="hover-feedback"
        value={Number(value)}
        precision={1}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        onChange={(_, value) => onChange(value)}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
};

export default RatingScale;
