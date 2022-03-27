import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import RatingScale from "./RatingScale";

const AddReviewForm = () => {
  const { register, setValue, handleSubmit, control } = useForm();
  const onSubmit = (ReviewData) => {
    //   register({ variables: userData });
    console.log("Add Review", ReviewData);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Controller
              name="rating"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <RatingScale onChange={onChange} value={value} error={error} />
              )}
              rules={{ required: "Rating Name required" }}
            />
          </Grid>

          <Grid item xs={12} my={1}>
            <Controller
              name="comments"
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
                  id="comments"
                  label="Comments"
                  placeholder="Add your comment"
                  name="comments"
                  multiline
                  rows={3}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="text"
                />
              )}
              rules={{ required: "Comments required" }}
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

export default AddReviewForm;