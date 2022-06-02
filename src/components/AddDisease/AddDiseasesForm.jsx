import { useQuery } from "@apollo/client";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { GET_DISEASE_CATEGORIES } from "../../graphQL/queries";
import MultiSelect from "../common/MultiSelect";

const AddDiseasesForm = ({ onSubmit, mutationLoading }) => {
  const { setValue, handleSubmit, control } = useForm();
  const [CategoryData, setCategoryData] = useState([]);
  const { loading: CategoryLoading, error: CategoryError } = useQuery(
    GET_DISEASE_CATEGORIES,
    {
      onCompleted: (data) => {
        setCategoryData(data.diseasesCategories);
      },
    }
  );

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Controller
              name="diseaseName"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  margin="dense"
                  size="medium"
                  fullWidth
                  id="diseaseName"
                  label="Diseases Name"
                  name="diseaseName"
                  autoFocus
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="text"
                />
              )}
              rules={{ required: "Name required" }}
            />
          </Grid>
          <Grid item xs={12}>
            <MultiSelect
              control={control}
              setValue={setValue}
              name={"diseaseCategoriesId"}
              loading={CategoryLoading}
              error={CategoryError}
              data={CategoryData}
            />
          </Grid>
          <Grid item xs={12} my={1}>
            <Controller
              name="descriptions"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  id="descriptions"
                  label="Descriptions"
                  placeholder="Describe about diseases ..."
                  name="descriptions"
                  multiline
                  rows={3}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="text"
                />
              )}
              rules={{ required: "Descriptions required" }}
            />
          </Grid>
        </Grid>
        <>
          <Box marginTop={1}>
            <LoadingButton
              loading={mutationLoading}
              type="submit"
              color="primary"
              variant="contained"
              startIcon={<SaveIcon />}
            >
              <Typography>
                <Box component="span" fontWeight={600}>
                  Save
                </Box>
              </Typography>
            </LoadingButton>
          </Box>
        </>
      </form>
    </>
  );
};

export default AddDiseasesForm;
