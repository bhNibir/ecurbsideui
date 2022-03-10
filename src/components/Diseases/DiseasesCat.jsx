import { Typography } from "@mui/material";
import React from "react";

const DiseasesCat = ({ row }) => {
  // console.log(row.diseaseCategories);
  return (
    <span>
      {row?.diseaseCategories?.map((item, index) => (
        <Typography variant="caption" key={item.id}>
          {item.name + " • "}
        </Typography>
      ))}
    </span>
  );
};

export default DiseasesCat;
