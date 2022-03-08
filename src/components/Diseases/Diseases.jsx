import AddCircleIcon from "@mui/icons-material/AddCircle";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { Chip, Paper, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import CustomPagination from "./../StyledComponents/CustomPagination";
import DiseaseAvatar from "./DiseaseAvatar";
import DiseaseFav from "./DiseaseFav";
import DiseasesCat from "./DiseasesCat";
import DiseasesDateTime from "./DiseasesDateTime";
import DiseasesLoadingOverlay from "./DiseasesLoadingOverlay";
import NoRowsOverlay from "./NoRowsOverlay";

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function QuickSearchToolbar({ value, onChange, clearSearch }) {
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
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: value ? "visible" : "hidden" }}
              onClick={clearSearch}
            >
              <ClearIcon fontSize="small" />
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
}

const dataColumns = [
  {
    field: "avatar",
    headerName: "",
    renderCell: DiseaseAvatar,
    width: 100,
    flex: 1,
  },
  // {
  //   field: "id",
  //   headerName: "ID",
  //   width: 100,
  //   flex: 1,
  // },
  {
    field: "diseaseName",
    headerName: "Disease Name",
    width: 200,
    flex: 1,
  },
  {
    field: "updatedAt",
    headerName: "Last Update",
    renderCell: DiseasesDateTime,
    width: 200,
    flex: 1,
  },
  {
    field: "categories",
    headerName: "Category",
    renderCell: DiseasesCat,
    width: 200,
    flex: 1,
  },
  {
    field: "favorite",
    headerName: "Favorite",
    renderCell: DiseaseFav,
    width: 100,
    flex: 1,
  },
];

const Diseases = ({ loading, error, data }) => {
  const dataRows = data ? data.diseases : [];
  console.log("All Diseases:", data);
  console.log(dataRows);

  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState(dataRows);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rows.filter((row) =>
      Object.keys(row).some((field) => searchRegex.test(row[field].toString()))
    );
    setRows(filteredRows);
  };

  useEffect(() => {
    setRows(rows);
  }, [rows]);

  if (error) return <p>Error :(</p>;

  return (
    <Box marginY={1}>
      <Paper elevation={0} sx={{ borderRadius: 5, paddingX: 3, paddingY: 2 }}>
        <Box marginX={3} marginY={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Typography
                variant="h6"
                color="primary"
                textTransform="uppercase"
              >
                All Diseases
              </Typography>
            </Box>
            <Box>
              <Chip
                color="primary"
                label="Add Disease"
                icon={<AddCircleIcon />}
                component={RouterLink}
                to="/add-disease"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition:
                    "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  boxShadow:
                    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                  "&:hover": {
                    backgroundColor: "rgb(6, 92, 158)",
                  },
                }}
              />
            </Box>
          </Stack>
        </Box>

        <Box style={{ width: "100%", height: "100%" }}>
          <DataGrid
            density="comfortable"
            autoHeight
            pagination
            loading={loading}
            pageSize={5}
            rowsPerPageOptions={[5]}
            components={{
              Toolbar: QuickSearchToolbar,
              Pagination: CustomPagination,
              NoRowsOverlay: NoRowsOverlay,
              LoadingOverlay: DiseasesLoadingOverlay,
            }}
            columns={dataColumns}
            rows={dataRows}
            componentsProps={{
              toolbar: {
                value: searchText,
                onChange: (event) => requestSearch(event.target.value),
                clearSearch: () => requestSearch(""),
              },
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Diseases;
