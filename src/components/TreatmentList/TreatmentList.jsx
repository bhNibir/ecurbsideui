import { Box, Typography } from "@mui/material";
import AddReviewBtn from "./AddReviewBtn";
import ratingOnlyOperators from "./FilterComponent/ratingOnlyOperators";
import ListRating from "./ListRating";
import TreatmentCat from "./TreatmentCat";
import TreatmentDataGrid from "./TreatmentDataGrid";

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
    valueGetter: ({ value }) => {
      return value.name;
    },
    renderCell: TreatmentCat,

    width: 200,
    flex: 1,
    sortable: false,
  },
  {
    field: "avgRating",
    headerName: "Average Rating",
    valueGetter: ({ value }) => {
      return value;
    },
    renderCell: ListRating,
    width: 200,
    flex: 0.5,
    type: "number",
    filterOperators: ratingOnlyOperators,
  },
  {
    field: "totalReviews",
    headerName: "Total Reviews",
    width: 120,
    flex: 0.5,
    // type: "number",
    filterable: false,
  },
  {
    field: " ",
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
      <Box marginX={1} marginY={2}>
        <Typography variant="h6" color="primary" textTransform="uppercase">
          Treatments
        </Typography>
      </Box>
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
