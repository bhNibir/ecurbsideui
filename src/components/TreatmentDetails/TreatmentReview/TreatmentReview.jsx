import { Box, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import FilterCard from "../FilterCard/FilterCard";
import ReviewItemList from "./ReviewItemList";
import SortSelect from "./SortSelect";

const TreatmentReview = ({ treatmentId }) => {
  const [orderBy, setOrderBy] = useState("");

  const handleOrdering = (e) => {
    setOrderBy(e.target.value);
  };

  console.log("treatmentId", treatmentId);
  return (
    <>
      {" "}
      <Paper sx={{ mb: 2, borderRadius: 3 }} variant="outlined">
        <Box padding={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Box>
              <Typography variant="h6">Reviews</Typography>
              <Typography variant="subtitle2">From users</Typography>
            </Box>
            <Box>
              <SortSelect orderBy={orderBy} handleOrdering={handleOrdering} />
            </Box>
          </Stack>
        </Box>
      </Paper>
      <FilterCard />
      <ReviewItemList orderBy={orderBy} treatmentId={treatmentId} />
    </>
  );
};

export default TreatmentReview;
