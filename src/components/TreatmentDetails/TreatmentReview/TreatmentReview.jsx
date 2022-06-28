import { useLazyQuery } from "@apollo/client";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GET_REVIEWS_BY_TREATMENT_ID } from "../../../graphQL/queries";
import FilterCard from "../FilterCard/FilterCard";
import ReviewItemList from "./ReviewItemList";
import SortSelect from "./SortSelect";

const TreatmentReview = ({ treatmentId }) => {
  const [reviews, setReviews] = useState([]);
  const [filterBy, setFilterBy] = useState({
    medicalProvider: [],
    country: [],
    specialty: [],
  });
  const [orderBy, setOrderBy] = useState("-createdAt");

  const handleOrdering = (e) => {
    setOrderBy(e.target.value);
  };

  const [getReview, { loading, error, data }] = useLazyQuery(
    GET_REVIEWS_BY_TREATMENT_ID
  );

  useEffect(() => {
    const values = { ...filterBy, id: treatmentId, orderBy: orderBy };
    console.log("values", values);
    getReview({
      variables: values,
      fetchPolicy: "no-cache",
      onCompleted: (data) => {
        setReviews(data.reviewsByTreatmentId.edges);
      },
    });
  }, [treatmentId, orderBy]);

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
      <FilterCard
        treatmentId={treatmentId}
        getReview={getReview}
        reviews={reviews}
        setReviews={setReviews}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        orderBy={orderBy}
      />
      <ReviewItemList
        treatmentId={treatmentId}
        reviews={reviews}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default TreatmentReview;
