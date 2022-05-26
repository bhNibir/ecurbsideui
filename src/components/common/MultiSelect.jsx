import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

const MultiSelect = ({
  name,
  control,
  setValue,
  loading,
  error,
  data,
  size = "normal",
  label,
}) => {
  const [inputValue, setInputValue] = useState("");

  if (error) return <p>Error :(</p>;

  return (
    <Controller
      name={name}
      control={control}
      value={inputValue}
      defaultValue={inputValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          multiple
          margin="dense"
          loading={loading}
          options={data}
          limitTags={2}
          size={size}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          onChange={(_, values) => {
            setValue(
              name,
              values.map(({ id }) => id)
            );
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
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
        />
      )}
      rules={{ required: "Category is required" }}
    />
  );
};

export default MultiSelect;
