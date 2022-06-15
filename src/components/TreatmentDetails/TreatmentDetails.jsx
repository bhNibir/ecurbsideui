import { Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddReview from "../AddReview/AddReview";
import RatingView from "./../RatingView/RatingView";
import TreatmentCategory from "./TreatmentCategory";
import TreatmentRating from "./TreatmentRating";
import TreatmentUser from "./TreatmentUser";

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
      <Grid container spacing={1}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ mt: 2, borderRadius: 5 }} elevation={3}>
            <Box paddingX={6} paddingY={2}>
              <Box>
                <Typography variant="h3" fontWeight={"400"} gutterBottom>
                  {treatmentName ? treatmentName : "treatment Name"}
                </Typography>
              </Box>
              <Box>
                <Chip
                  variant="outlined"
                  color={"secondary"}
                  size={"string"}
                  label={
                    <Typography variant="subtitle2" color="secondary">
                      Disease:{" "}
                      {disease.diseaseName
                        ? disease.diseaseName
                        : "Disease Name"}
                    </Typography>
                  }
                />
              </Box>
              <Box marginBottom={{ md: 1, sm: 2, xs: 3 }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  alignItems={{ xs: "start", sm: "center" }}
                  justifyContent="space-between"
                  spacing={2}
                >
                  <TreatmentUser createBy={createBy} createdAt={createdAt} />
                  <TreatmentRating value={avgRating} />
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
                  <Typography textAlign="justify" variant="body2">
                    {descriptions}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <AddReview
            diseaseId={disease.id}
            treatmentId={id}
            treatmentName={treatmentName}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper sx={{ borderRadius: 5 }} elevation={3}>
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
      </Grid>
    </>
  );
};

export default TreatmentDetails;
