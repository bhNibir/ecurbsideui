import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import React from "react";

const AddReviewBtn = ({ id }) => {
  return (
    <>
      <Fab key={id} size="small" color="primary" aria-label="add review">
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddReviewBtn;
