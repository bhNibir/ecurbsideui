import { Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddReview from "../AddReview/AddReview";
import RatingView from "./../RatingView/RatingView";
import TreatmentCategory from "./TreatmentCategory";
import TreatmentRating from "./TreatmentRating";
import { TreatmentUser } from "./TreatmentUser";

const TreatmentDetails = ({ data }) => {
  const {
    id,
    disease,
    treatmentName,
    createBy,
    descriptions,
    treatmentCategories,
    otherName,
    avgRating,
    createdAt,
    reviews,
  } = data.treatmentById;
  console.log("treatmentById", data);
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ mt: 2, mb: 2, borderRadius: 5 }} elevation={3}>
            <Box paddingX={6} paddingY={2}>
              <Box>
                <Typography variant="h3" fontWeight={"400"} gutterBottom>
                  {treatmentName ? treatmentName : "treatment Name"}
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <TreatmentUser createBy={createBy} createdAt={createdAt} />
                  <TreatmentRating value={avgRating} />
                  {/* <Box>
                    <Chip
                      color="primary"
                      label="Add Treatment"
                      icon={<AddCircleIcon />}
                      component={RouterLink}
                      to="/add-treatment"
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition:
                          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                        boxShadow:
                          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                        "&:hover": {
                          backgroundColor: "rgb(6, 92, 158)",
                        },
                      }}
                    />
                  </Box> */}
                </Stack>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
                marginY={0.5}
              >
                <Typography paddingRight={0.5} variant="subtitle2">
                  Other Name:{" "}
                </Typography>
                <Typography variant="body2">{otherName}</Typography>
              </Box>
              <TreatmentCategory category={treatmentCategories} />

              <Box marginTop={3}>
                <Box paddingBottom={2}>
                  <Typography variant="body2">{descriptions}</Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
          <Paper sx={{ mt: 2, mb: 2, borderRadius: 5 }} elevation={3}>
            <Box paddingX={6} paddingY={3}>
              <Typography variant="h6">Reviews</Typography>
              <Typography variant="subtitle2">From users</Typography>
            </Box>
            <Box paddingX={6} paddingBottom={3}>
              {reviews.map((review) => (
                <RatingView key={review.id} review={review} />
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <AddReview diseaseId={disease.id} treatmentId={id} />
        </Grid>
      </Grid>
    </>
  );
};

export default TreatmentDetails;
