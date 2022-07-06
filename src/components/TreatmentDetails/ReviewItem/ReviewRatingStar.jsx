import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff3d47",
  },
});

const ReviewRatingStar = ({ id, value }) => {
  return (
    <>
      <StyledRating
        key={id}
        name="customized-color"
        defaultValue={0}
        value={value}
        icon={<StarRoundedIcon fontSize="inherit" />}
        emptyIcon={<StarOutlineRoundedIcon fontSize="inherit" />}
        sx={{
          fontSize: "1.2rem",
        }}
        readOnly
      />
    </>
  );
};

export default ReviewRatingStar;
