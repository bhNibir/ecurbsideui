import { Avatar, Box } from "@mui/material";
import React from "react";
import VirusImg from "../../assets/images/virus.png";

const DiseaseAvatar = () => {
  return (
    <>
      <Box sx={{ p: 2, display: "flex" }}>
        <Avatar alt="Cindy Baker" src={VirusImg} />
      </Box>
    </>
  );
};

export default DiseaseAvatar;
