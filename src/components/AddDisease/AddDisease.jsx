import { useMutation } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_DISEASE, GET_DISEASES } from "../../gql/gql";
import SubmitPaper from "../StyledComponents/SubmitPaper";
import AddDiseasesForm from "./AddDiseasesForm";

const AddDisease = () => {
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [register, { data, loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_DISEASE, {
      refetchQueries: [{ query: GET_DISEASES }],
      onCompleted: (data) => {
        enqueueSnackbar("Successfully add a new Disease!", {
          variant: "success",
        });
        navigate(`/disease/${data.createDisease.disease.id}`);
      },
    });

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
          <AddDiseasesForm
            mutationLoading={mutationLoading}
            onSubmit={onSubmit}
          />
        </Box>
      </SubmitPaper>
    </>
  );
};

export default AddDisease;
