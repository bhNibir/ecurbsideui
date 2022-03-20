import { Chip, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import React from "react";

const TreatmentCategory = ({ category }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const formateLabel = (name) => {
    if (matches && name.length >= 25) {
      return name.slice(0, 22) + "...";
    }

    return name;
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
        }}
      >
        <Box component="span">
          <Typography paddingRight={0.5} variant="subtitle2">
            Category:
          </Typography>
        </Box>
        <Box component="span">
          <Tooltip title={category.name} placement="top" arrow>
            <Chip
              label={formateLabel(category.name)}
              variant="outlined"
              size="small"
              ou
            />
          </Tooltip>
        </Box>
      </Box>
    </>
  );
};

export default TreatmentCategory;
