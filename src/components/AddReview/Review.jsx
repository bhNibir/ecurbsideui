import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SubmitPaper from "../StyledComponents/SubmitPaper";
import AddReview from "./AddReview";

const Review = ({
  diseaseName,
  diseaseId,
  treatmentId,
  treatmentName,
  gotoTreatment,
  headerTitle,
}) => {
  return (
    <>
      <Box role="presentation" my={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" component={RouterLink} to="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            component={RouterLink}
            to={`/disease/${diseaseId}`}
          >
            {diseaseName}
          </Link>
          <Link
            underline="hover"
            color="inherit"
            component={RouterLink}
            to={`/treatment/${treatmentId}`}
          >
            {treatmentName}
          </Link>
          <Typography color="text.primary">Add Review</Typography>
        </Breadcrumbs>
      </Box>
      <SubmitPaper elevation={3}>
        <AddReview
          diseaseName={diseaseName}
          diseaseId={diseaseId}
          treatmentId={treatmentId}
          treatmentName={treatmentName}
          gotoTreatment={true}
          headerTitle={headerTitle}
          textRow={7}
        />
      </SubmitPaper>
    </>
  );
};

export default Review;
