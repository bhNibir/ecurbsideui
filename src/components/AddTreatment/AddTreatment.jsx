import { Box, Typography } from "@mui/material";
import React from "react";
import SubmitPaper from "../StyledComponents/SubmitPaper";
import AddTreatmentForm from "./AddTreatmentForm";

const AddTreatment = () => {
  //   const [register, { data, loading: mutationLoading, error: mutationError }] =
  //     useMutation(CREATE_DISEASE);

  //   console.log("mutationLoading", mutationLoading);
  //   console.log("mutationError", mutationError);
  //   console.log("data", data);

  const onSubmit = (treatmentData) => {
    //   register({ variables: userData });
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
