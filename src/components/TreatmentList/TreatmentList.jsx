import React from "react";
import AddReviewBtn from "./AddReviewBtn";
import TreatmentCat from "./TreatmentCat";
import TreatmentDataGrid from "./TreatmentDataGrid";
import TreatmentRating from "./TreatmentRating";
const dataColumns = [
  {
    field: "treatmentName",
    headerName: "Treatment",
    type: "string",
    width: 200,
    flex: 1,
    filterable: false,
  },
  {
    field: "treatmentCategories",
    headerName: "Category",
    renderCell: TreatmentCat,
    width: 200,
    flex: 1,
    sortable: false,
  },
  {
    field: "",
    headerName: "Rating",
    renderCell: TreatmentRating,
    width: 200,
    flex: 0.5,
    sortable: false,
    type: "number",
  },
  {
    field: "id",
    headerName: "Reviews",
    // renderCell: DiseaseFav,
    width: 120,
    sortable: false,
    flex: 0.5,
    type: "number",
  },
  {
    headerName: "Add Review",
    renderCell: AddReviewBtn,
    width: 120,
    sortable: false,
    flex: 0.5,
    type: "actions",
  },
];

const TreatmentList = ({ loading, error, treatments }) => {
  return (
    <>
      <div>Treatment</div>
      <TreatmentDataGrid
        loading={loading}
        error={error}
        treatments={treatments}
        dataColumns={dataColumns}
      />
    </>
  );
};

export default TreatmentList;
