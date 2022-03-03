import LinearProgress from "@mui/material/LinearProgress";
import { GridOverlay } from "@mui/x-data-grid";
import React from "react";

const DiseasesLoadingOverlay = () => {
  return (
    <GridOverlay>
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <LinearProgress color="secondary" />
      </div>
    </GridOverlay>
  );
};

export default DiseasesLoadingOverlay;
