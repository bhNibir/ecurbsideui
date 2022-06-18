import { useMutation } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { CREATE_REVIEW } from "../../graphQL/mutations";
import {
  GET_DISEASE_BY_ID,
  GET_REVIEWS_BY_TREATMENT_ID,
  GET_TREATMENT_BY_ID,
} from "../../graphQL/queries";
import AddReviewForm from "./AddReviewForm";

const AddReview = ({
  diseaseId,
  treatmentId,
  treatmentName,
  gotoTreatment = false,
  headerTitle,
  textRow,
}) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [register, { data, loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_REVIEW, {
      refetchQueries: [
        { query: GET_TREATMENT_BY_ID, variables: { id: treatmentId } },
        { query: GET_DISEASE_BY_ID, variables: { id: diseaseId } },
        { query: GET_REVIEWS_BY_TREATMENT_ID, variables: { id: treatmentId } },
      ],
      onCompleted: (data) => {
        console.log(data);
        enqueueSnackbar(`${treatmentName}, Successfully Rated! `, {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });

        if (gotoTreatment) {
          navigate(`/treatment/${treatmentId}`);
        }
      },
      onError: (error) => {
        enqueueSnackbar(error.message, {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
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
      <Box>
        <Box marginLeft={1}>
          <Typography variant="h6" color={"text.secondary"} gutterBottom>
            {headerTitle ? headerTitle : " Add Review"}
          </Typography>
        </Box>
        <Box>
          <AddReviewForm
            onSubmit={onSubmit}
            mutationLoading={mutationLoading}
            textRow={textRow}
          />
        </Box>
      </Box>
    </>
  );
};

export default AddReview;
