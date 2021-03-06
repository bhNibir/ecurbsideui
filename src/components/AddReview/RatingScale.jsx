import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { FormHelperText, Typography } from "@mui/material";
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
        icon={<StarRoundedIcon fontSize="inherit" />}
        emptyIcon={
          <StarOutlineRoundedIcon
            fontSize="inherit"
            color={error ? "error" : "inherit"}
          />
        }
      />
      {value !== null && (
        <Box sx={{ ml: 1 }}>
          <Typography variant="caption">
            {labels[hover !== -1 ? hover : value]}
          </Typography>
        </Box>
      )}
      {hover === -1 && error !== null && (
        <FormHelperText error={true}>{error?.message}</FormHelperText>
      )}
    </Box>
  );
};

export default RatingScale;
