import { Paper, styled } from "@mui/material";
import React from "react";
const CustomizePaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),

    marginLeft: theme.spacing(44),
    marginRight: theme.spacing(44),
    padding: theme.spacing(4),
  },
}));

const DiseasesPaper = (props) => {
  return <CustomizePaper {...props} />;
};

export default DiseasesPaper;
