import { useMutation } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { CREATE_TREATMENT } from "../../gql/gql";
import SubmitPaper from "../StyledComponents/SubmitPaper";
import AddTreatmentForm from "./AddTreatmentForm";

const AddTreatment = () => {
  let { id } = useParams();
  const [register, { data, loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_TREATMENT);

  console.log("mutationLoading", mutationLoading);
  console.log("mutationError", mutationError);
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
          <AddTreatmentForm onSubmit={onSubmit} />
        </Box>
      </SubmitPaper>
    </>
  );
};

export default AddTreatment;
