import { useQuery } from "@apollo/client";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React from "react";
import { GET_CATEGORIES } from "./../../gql/gql";

const MultiSelect = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  //if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log("All Categories:", data);

  return (
    <Autocomplete
      multiple
      id="Categories"
      loading={loading}
      options={data ? data.diseasesCategories : []}
      limitTags={2}
      getOptionLabel={(option) => option.name}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          id="Categories"
          name="Categories"
          label="Categories"
          placeholder="Categories"
          variant="outlined"
          margin="dense"
          fullWidth
          //   value={value}
          //   onChange={onChange}
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
  );
};

export default MultiSelect;
