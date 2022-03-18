import { Typography } from "@mui/material";
import React from "react";

const TreatmentCat = ({ value }) => {
  console.log(value);
  return (
    <span>
      {/* {row?.diseaseCategories?.map((item, index) => (
        <Typography variant="caption" key={item.id}>
          {item.name + " • "}
        </Typography>
      ))} */}

      <Typography variant="caption">{value.name}</Typography>
    </span>
  );
};

export default TreatmentCat;
