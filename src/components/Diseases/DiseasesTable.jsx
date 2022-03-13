import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomPagination from "./../StyledComponents/CustomPagination";
import DiseaseAvatar from "./DiseaseAvatar";
import DiseaseFav from "./DiseaseFav";
import DiseasesCat from "./DiseasesCat";
import DiseasesDateTime from "./DiseasesDateTime";
import DiseasesLoadingOverlay from "./DiseasesLoadingOverlay";
import DiseasesQuickSearchToolbar from "./DiseasesQuickSearchToolbar";
import NoRowsOverlay from "./NoRowsOverlay";

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

const dataColumns = [
  {
    field: "avatar",
    headerName: "",
    renderCell: DiseaseAvatar,
    width: 80,
    sortable: false,
    filterable: false,
  },
  {
    field: "id",
    headerName: "ID",
    width: 50,
    sortable: false,
    filterable: false,
  },
  {
    field: "diseaseName",
    headerName: "Disease Name",
    type: "string",
    width: 200,
    flex: 0.5,
    filterable: false,
  },
  {
    field: "updatedAt",
    headerName: "Last Update",
    renderCell: DiseasesDateTime,
    width: 200,
    type: "dateTime",
  },
  {
    field: "categories",
    headerName: "Category",
    renderCell: DiseasesCat,
    width: 200,
    flex: 1,
    sortable: false,
  },
  {
    field: "favorite",
    headerName: "Favorite",
    renderCell: DiseaseFav,
    width: 80,
    sortable: false,
    type: "actions",
  },
  {
    field: "medicalSpecialty",
    headerName: "Specialty",
    width: 80,
    sortable: false,
    hide: true,
  },
];

const DiseasesTable = ({ data, loading }) => {
  console.log(data);
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState([]);
  let navigate = useNavigate();

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = data.diseases.filter((disease) =>
      Object.keys(disease).some((field) =>
        searchRegex.test(disease[field].toString())
      )
    );
    setRows(filteredRows);
  };

  const handleRowClick = (event) => {
    navigate(`/disease/${event.id}`);
  };

  useEffect(() => {
    if (data.diseases) {
      setRows(data.diseases);
    }
  }, [data.diseases]);

  return (
    <>
      <DataGrid
        density="comfortable"
        autoHeight
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        loading={loading}
        components={{
          Toolbar: DiseasesQuickSearchToolbar,
          Pagination: CustomPagination,
          NoRowsOverlay: NoRowsOverlay,
          LoadingOverlay: DiseasesLoadingOverlay,
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

export default DiseasesTable;
