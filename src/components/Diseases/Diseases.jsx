import { useQuery } from "@apollo/client";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { GET_DISEASES } from "./../../gql/gql";
import CustomPagination from "./../StyledComponents/CustomPagination";
import DiseaseAvatar from "./DiseaseAvatar";
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
  },
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "diseaseName",
    headerName: "Disease Name",
    width: 200,
  },
  {
    field: "updatedAt",
    headerName: "Last Update",
    width: 200,
  },
  {
    field: "categories",
    headerName: "Category",
    width: 200,
  },
  {
    field: "favorite",
    headerName: "Favorite",
    // renderCell: Fav,
    width: 100,
  },
];

const Diseases = () => {
  const { loading, error, data } = useQuery(GET_DISEASES);
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
    <div style={{ width: "100%", height: "100%" }}>
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
    </div>
  );
};

export default Diseases;
