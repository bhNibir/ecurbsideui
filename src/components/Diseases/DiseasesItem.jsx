import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import React from "react";
import CustomPagination from "./../StyledComponents/CustomPagination";

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

const DiseasesItem = ({ data }) => {
  // const { data } = useDemoData({
  //     dataSet: 'Commodity',
  //     rowLength: 100,
  //     maxColumns: 6,
  // });

  const datarows: GridRowsProp = data.diseases;

  const datacolumns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "diseaseName", headerName: "Disease Name", width: 200 },
  ];

  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState(datarows);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rows.filter((row) =>
      Object.keys(row).some((field) => searchRegex.test(row[field].toString()))
    );
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(rows);
  }, [rows]);

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        density="comfortable"
        autoHeight
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: QuickSearchToolbar,
          Pagination: CustomPagination,
        }}
        columns={datacolumns}
        rows={datarows}
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

export default DiseasesItem;
