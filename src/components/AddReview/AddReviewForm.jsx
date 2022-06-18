import { yupResolver } from "@hookform/resolvers/yup";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import RatingScale from "./RatingScale";

const schema = yup
  .object()
  .shape({
    rating: yup.number().typeError("Required").required("Required"),
  })
  .required();

const AddReviewForm = ({ onSubmit, mutationLoading, textRow = 3 }) => {
  const { register, setValue, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

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
              rules={{ required: "Rating required" }}
            />
          </Grid>

          <Grid item xs={12} my={1}>
            <Controller
              name="content"
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
                  id="content"
                  label="Comments"
                  placeholder="Add your comment"
                  name="content"
                  multiline
                  rows={textRow}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  type="text"
                />
              )}
              // rules={{ required: "Comments required" }}
            />
          </Grid>
        </Grid>
        <>
          <Box marginTop={1}>
            <LoadingButton
              loading={mutationLoading}
              type="submit"
              color="success"
              variant="contained"
              startIcon={<SaveIcon />}
              size="small"
            >
              <Typography>
                <Box component="span" fontWeight={600}>
                  Post Review
                </Box>
              </Typography>
            </LoadingButton>
          </Box>
        </>
      </form>
    </>
  );
};

export default AddReviewForm;
