import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import AddReviewUserCard from "./AddReviewUserCard/AddReviewUserCard";
import ReviewItem from "./ReviewItem/ReviewItem";
import TreatmentCategory from "./TreatmentCategory";
import TreatmentRating from "./TreatmentRating";
import TreatmentReview from "./TreatmentReview/TreatmentReview";
import TreatmentUser from "./TreatmentUser";

const TreatmentDetails = ({ TreatmentDetailData }) => {
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
    userReview,
  } = TreatmentDetailData;

  console.log("TreatmentDetailData", TreatmentDetailData);
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Paper sx={{ mt: 2, mb: 2, borderRadius: 3 }} variant="outlined">
            <Box padding={3}>
              <Box>
                <Typography variant="h4" fontWeight={"400"} gutterBottom>
                  {treatmentName ? treatmentName : "treatment Name"}
                </Typography>
              </Box>
              <Box>
                {/* <Chip
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
                /> */}
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
          <Paper sx={{ mt: 2, mb: 2, borderRadius: 3 }} variant="outlined">
            {userReview ? (
              <>
                <Box padding={3}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Your Review
                    </Typography>
                  </Box>
                  <Divider />
                  <ReviewItem review={userReview} />
                </Box>
              </>
            ) : (
              <AddReviewUserCard treatmentId={id} />
            )}
            {/* <AddReview
                diseaseId={disease.id}
                treatmentId={id}
                treatmentName={treatmentName}
              /> */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <TreatmentReview treatmentId={id} />
        </Grid>
      </Grid>
    </>
  );
};

export default TreatmentDetails;
