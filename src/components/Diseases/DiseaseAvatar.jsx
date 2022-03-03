import { Avatar, Box, Card } from "@mui/material";
import React from "react";
import VirusImg from "../../assets/images/virus.png";

const DiseaseAvatar = () => {
  return (
    <Card>
      <Box sx={{ p: 2, display: "flex" }}>
        <Avatar alt="Cindy Baker" src={VirusImg} />
      </Box>
    </Card>
  );
};

export default DiseaseAvatar;
