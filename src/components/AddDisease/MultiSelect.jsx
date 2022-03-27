import { useQuery } from "@apollo/client";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { GET_DISEASE_CATEGORIES } from "../../gql/gql";

const MultiSelect = ({ control, setValue }) => {
  const [inputValue, setInputValue] = useState("");
  const { loading, error, data } = useQuery(GET_DISEASE_CATEGORIES);

  //if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log("All Categories:", data);

  return (
    <Controller
      name="diseaseCategoriesId"
      control={control}
      defaultValue={inputValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          multiple
          loading={loading}
          options={data ? data.diseasesCategories : []}
          limitTags={2}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          onChange={(_, values) => {
            setValue(
              "diseaseCategoriesId",
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
              placeholder="Select Categories"
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
