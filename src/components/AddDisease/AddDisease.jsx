import { useMutation } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { CREATE_DISEASE } from "../../graphQL/mutations";
import { GET_DISEASES } from "../../graphQL/queries";
import SubmitPaper from "../StyledComponents/SubmitPaper";
import AddDiseasesForm from "./AddDiseasesForm";

const AddDisease = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [register, { data, loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_DISEASE, {
      refetchQueries: [{ query: GET_DISEASES }],
      onCompleted: (data) => {
        enqueueSnackbar(
          ` ${data.createDisease.disease.diseaseName}, Successfully added!`,
          {
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
            variant: "success",
          }
        );
        navigate(`/disease/${data.createDisease.disease.id}`);
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
