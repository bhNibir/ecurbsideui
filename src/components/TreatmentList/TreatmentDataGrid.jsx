import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomPagination from "../StyledComponents/CustomPagination";
import TreatmentLoadingOverlay from "./TreatmentLoadingOverlay";
import TreatmentNoRowsOverlay from "./TreatmentNoRowsOverlay";
import TreatmentQuickSearchToolbar from "./TreatmentQuickSearchToolbar";

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

const TreatmentDataGrid = ({ loading, error, treatments, dataColumns }) => {
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState([]);
  let navigate = useNavigate();

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = treatments.filter((treatment) =>
      Object.keys(treatment).some((field) => searchRegex.test(treatment[field]))
    );
    console.log("searchRegex : ", searchRegex);
    console.log("filteredRows : ", filteredRows);
    setRows(filteredRows);
  };

  const handleRowClick = (event) => {
    navigate(`/treatment/${event.id}`);
  };

  useEffect(() => {
    if (treatments) {
      setRows(treatments);
    }
  }, [treatments]);

  return (
    <>
      <DataGrid
        density="comfortable"
        autoHeight
        pagination
        pageSize={5}
        rowsPerPageOptions={[10]}
        loading={loading}
        components={{
          Toolbar: TreatmentQuickSearchToolbar,
          Pagination: CustomPagination,
          NoRowsOverlay: TreatmentNoRowsOverlay,
          LoadingOverlay: TreatmentLoadingOverlay,
        }}
        disableColumnSelector
        disableColumnMenu
        disableSelectionOnClick={true}
        columns={dataColumns}
        rows={rows}
        onRowClick={handleRowClick}
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

export default TreatmentDataGrid;
