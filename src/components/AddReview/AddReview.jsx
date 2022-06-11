import { useMutation } from "@apollo/client";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { CREATE_REVIEW } from "../../graphQL/mutations";
import { GET_DISEASE_BY_ID, GET_TREATMENT_BY_ID } from "../../graphQL/queries";
import AddReviewForm from "./AddReviewForm";

const AddReview = ({ diseaseId, treatmentId, gotoTreatment = false }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [register, { data, loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_REVIEW, {
      refetchQueries: [
        { query: GET_TREATMENT_BY_ID, variables: { id: treatmentId } },
        { query: GET_DISEASE_BY_ID, variables: { id: diseaseId } },
      ],
      onCompleted: (data) => {
        enqueueSnackbar("Successfully add a Review!", {
          variant: "success",
        });

        if (gotoTreatment) {
          navigate(`/treatment/${treatmentId}`);
        }
      },
    });

  console.log("mutationLoading", mutationLoading);
  console.log("mutationError", mutationError);
  console.log("data", data);

  const onSubmit = (reviewData) => {
    reviewData.treatmentId = treatmentId;
    register({ variables: reviewData });
    console.log("Add Treatment", reviewData);
  };

  return (
    <>
      <Paper
        sx={{ mt: 2, mb: 2, ml: { md: 3 }, borderRadius: 5 }}
        elevation={3}
      >
        <Box paddingX={6} paddingTop={3} paddingBottom={1.5}>
          <Typography variant="h6"> Add Review</Typography>
        </Box>
        <Box paddingX={6} paddingBottom={3}>
          <AddReviewForm
            onSubmit={onSubmit}
            mutationLoading={mutationLoading}
          />
        </Box>
      </Paper>
    </>
  );
};

export default AddReview;
