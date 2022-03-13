import React from "react";
import TreatmentDataGrid from "./TreatmentDataGrid";
const dataColumns = [
  {
    field: "treatmentName",
    headerName: "Treatment",
    type: "string",
    width: 200,

    filterable: false,
  },
  {
    field: "treatmentCategories",
    headerName: "Category",
    // renderCell: DiseasesCat,
    width: 200,
    sortable: false,
  },
  {
    field: "",
    headerName: "Rating",
    // renderCell: DiseaseFav,
    width: 100,
    sortable: false,
    type: "number",
  },
  {
    field: "id",
    headerName: "Reviews",
    // renderCell: DiseaseFav,
    width: 120,
    sortable: false,
    type: "number",
  },
  {
    field: "",
    headerName: "Add Review",
    width: 120,
    sortable: false,
    type: "actions",
  },
];

const TreatmentList = ({ loading, error, data }) => {
  return (
    <>
      <div>Treatment</div>
      <TreatmentDataGrid
        loading={loading}
        error={error}
        data={data}
        dataColumns={dataColumns}
      />
    </>
  );
};

export default TreatmentList;
