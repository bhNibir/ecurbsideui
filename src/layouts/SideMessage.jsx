import { styled, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/images/logo.svg";

const SideImage = styled("img")({
  width: "275px",
  marginBottom: "20px",
});

const SideMessage = () => (
  <>
    <SideImage src={logo} alt="Ecurbside Logo" />
    <Typography variant="h5" component="h2" gutterBottom>
      Crowdsourcing medical treatments to understand options.
    </Typography>
  </>
);

export default SideMessage;
