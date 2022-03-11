import { Avatar, Box } from "@mui/material";
import React from "react";
import VirusImg from "../../assets/images/virus.png";

const DiseaseAvatar = () => {
  return (
    <>
      <Box textAlign="center" sx={{ p: 2 }}>
        <Avatar variant="rounded" alt="Cindy Baker" src={VirusImg} />
      </Box>
    </>
  );
};

export default DiseaseAvatar;
