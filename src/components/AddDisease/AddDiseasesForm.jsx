import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import MultiSelect from "./MultiSelect";

const AddDiseasesForm = ({ onSubmit }) => {
  const { register, setValue, handleSubmit, control } = useForm();

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
              register={register}
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
            <Button
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
            </Button>
          </Box>
        </>
      </form>
    </>
  );
};

export default AddDiseasesForm;
