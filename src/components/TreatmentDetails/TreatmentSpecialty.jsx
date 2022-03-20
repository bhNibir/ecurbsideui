import { Chip, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import React from "react";

const TreatmentSpecialty = ({ diseaseCategories }) => {
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
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          marginBottom: 1,
        }}
        component="ul"
      >
        <Box component="span" margin={0.25}>
          <Typography variant="subtitle2">Specialty:</Typography>
        </Box>
        {diseaseCategories.map((category) => {
          return (
            <Box component="span" margin={0.25} key={category.id}>
              <Tooltip title={category.name} placement="top" arrow>
                <Chip
                  label={formateLabel(category.name)}
                  color="success"
                  size="small"
                  variant="outlined"
                />
              </Tooltip>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default TreatmentSpecialty;
