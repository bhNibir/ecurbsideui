import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddReviewBtn = ({ id }) => {
  let navigate = useNavigate();

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
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddReviewBtn;
