import { Box, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import AvatarUpload from "./AvatarUpload";

const ProfessionalFrom = ({ control, validationError }) => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} textAlign="center">
          <AvatarUpload control={control} />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                margin="dense"
                variant="outlined"
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={value}
                onChange={onChange}
                type="text"
                error={!!error || !!validationError?.username}
                helperText={[
                  error && (
                    <span key={error.message.length}>
                      {error.message}
                      <br />
                    </span>
                  ),

                  validationError?.username?.map(({ message }, index) => (
                    <span key={index}>
                      {message}
                      <br />
                    </span>
                  )),
                ]}
              />
            )}
          />

          <Typography mt={2} variant="caption" display="block" gutterBottom>
            <Box ml={2} component="span">
              By clicking Sign Up, you agree to our{" "}
              <Link to="/">Terms of Service</Link>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfessionalFrom;
