import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import CustomPagination from "./../StyledComponents/CustomPagination";
import DiseasesQuickSearchToolbar from "./DiseasesQuickSearchToolbar";
import NoRowsOverlay from "./NoRowsOverlay";

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

const DiseasesTable = ({ data, dataColumns }) => {
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState(data.diseases);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rows.filter((row) =>
      Object.keys(row).some((field) => searchRegex.test(row[field].toString()))
    );
    setRows(filteredRows);
  };

  useEffect(() => {
    setRows(data.diseases);
  }, [data.diseases]);

  return (
    <>
      <DataGrid
        density="comfortable"
        autoHeight
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: DiseasesQuickSearchToolbar,
          Pagination: CustomPagination,
          NoRowsOverlay: NoRowsOverlay,
        }}
        disableColumnSelector
        disableColumnMenu
        columns={dataColumns}
        rows={rows}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
          },
        }}
      />
    </>
  );
};

export default DiseasesTable;
