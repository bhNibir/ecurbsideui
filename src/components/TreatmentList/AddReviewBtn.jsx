import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";

const AddReviewBtn = ({ id }) => {
  const navigate = useNavigate();

  const handleAddReview = (event) => {
    event.stopPropagation();

    navigate(`/add-review/${id}`);
  };

  return (
    <>
      <Fab
        key={id}
        size="small"
        color="primary"
        aria-label="add review"
        onClick={handleAddReview}
      >
        <RateReviewRoundedIcon />
      </Fab>
    </>
  );
};

export default AddReviewBtn;
