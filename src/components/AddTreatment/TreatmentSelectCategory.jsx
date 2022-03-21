import { useQuery } from "@apollo/client";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { GET_TREATMENT_CATEGORIES } from "./../../gql/gql";

const TreatmentSelectCategory = ({ control, setValue }) => {
  const [inputValue, setInputValue] = useState("");
  const { loading, error, data } = useQuery(GET_TREATMENT_CATEGORIES);

  //if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log("All Traetment Categories:", data);

  return (
    <>
      <Controller
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Autocomplete
            loading={loading}
            options={data ? data.treatmentsCategories : []}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Category"
                placeholder="Select Category"
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
        name="treatmentCategoryId"
        control={control}
        rules={{ required: "Category is required" }}
      />
    </>
  );
};

export default TreatmentSelectCategory;
