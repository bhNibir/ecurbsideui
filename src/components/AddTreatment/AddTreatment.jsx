import { useMutation } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { useParams } from "react-router-dom";
import { CREATE_TREATMENT } from "../../graphQL/mutations";
import { GET_DISEASE_BY_ID } from "../../graphQL/queries";
import SubmitPaper from "../StyledComponents/SubmitPaper";
import AddTreatmentForm from "./AddTreatmentForm";

const AddTreatment = () => {
  let { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const [register, { data, loading: mutationLoading }] = useMutation(
    CREATE_TREATMENT,
    {
      refetchQueries: [{ query: GET_DISEASE_BY_ID }],
      onCompleted: (data) => {
        enqueueSnackbar("Successfully add a new Treatment!", {
          variant: "success",
        });
      },
      onError: (error) => {
        enqueueSnackbar("Successfully add a new Treatment!", {
          variant: "error",
        });
      },
    }
  );

  console.log("mutationLoading", mutationLoading);
  console.log("data", data);

  const onSubmit = (treatmentData) => {
    treatmentData.diseaseId = id;
    register({ variables: treatmentData });
    console.log("Add Treatment", treatmentData);
  };

  // if (mutationLoading) return <Loading />;
  // if (mutationError) return <Errors message={data.register.errors} />;

  return (
    <>
      <SubmitPaper elevation={3}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="primary"
          gutterBottom
        >
          Add Treatment
        </Typography>

        <Box>
          <AddTreatmentForm
            onSubmit={onSubmit}
            mutationLoading={mutationLoading}
          />
        </Box>
      </SubmitPaper>
    </>
  );
};

export default AddTreatment;
