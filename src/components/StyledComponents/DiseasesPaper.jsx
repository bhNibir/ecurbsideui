import { Paper, styled } from "@mui/material";
import React from "react";
const CustomizePaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),

    marginLeft: theme.spacing(42),
    marginRight: theme.spacing(42),
    padding: theme.spacing(4),
  },
}));

const DiseasesPaper = (props) => {
  return <CustomizePaper {...props} />;
};

export default DiseasesPaper;
