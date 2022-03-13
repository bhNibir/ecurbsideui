import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, TextField } from "@mui/material";
import { GridToolbarFilterButton } from "@mui/x-data-grid";
import React from "react";

const TreatmentQuickSearchToolbar = ({ value, onChange, clearSearch }) => {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        justifyContent: "space-between",
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <div>
        <GridToolbarFilterButton />
        {/* <GridToolbarDensitySelector /> */}
      </div>
      <TextField
        variant="standard"
        value={value}
        onChange={onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" color="primary" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: value ? "visible" : "hidden" }}
              onClick={clearSearch}
            >
              <ClearIcon fontSize="small" color="error" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />
    </Box>
  );
};

export default TreatmentQuickSearchToolbar;
