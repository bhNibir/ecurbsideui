import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";

const SingleSelect = ({
  name,
  control,
  loading,
  error,
  data,
  size = "normal",
  label,
  disabled,
}) => {
  useEffect(() => {
    console.log("Are you a health care provider ? ", disabled);
  }, [disabled]);
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: "Category is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Autocomplete
            disabled={disabled}
            size={size}
            margin="dense"
            loading={loading}
            options={data}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label || "Select Category"}
                placeholder={label || "Select Category"}
                variant="outlined"
                margin="dense"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
            onChange={(_, value) => onChange(value?.id)}
          />
        )}
      />
    </>
  );
};

export default SingleSelect;
