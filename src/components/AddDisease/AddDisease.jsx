import { useMutation } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { CREATE_DISEASE } from "../../gql/gql";
import SubmitPaper from "../StyledComponents/SubmitPaper";
import AddDiseasesForm from "./AddDiseasesForm";

const AddDisease = () => {
  const [register, { data, loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_DISEASE);

  console.log("mutationLoading", mutationLoading);
  console.log("mutationError", mutationError);
  console.log("data", data);

  const onSubmit = (userData) => {
    register({ variables: userData });
    console.log("Add Diseases", userData);
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
          Add New Diseases
        </Typography>

        <Box>
          <AddDiseasesForm onSubmit={onSubmit} />
        </Box>
      </SubmitPaper>
    </>
  );
};

export default AddDisease;
