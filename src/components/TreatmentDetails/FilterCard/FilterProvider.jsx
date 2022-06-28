import { useQuery } from "@apollo/client";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import { GET_MEDICAL_PROVIDER } from "../../../graphQL/queries";

const FilterProvider = ({ handleFilter }) => {
  const [providers, setProviders] = useState([]);

  const { loading, error } = useQuery(GET_MEDICAL_PROVIDER, {
    onCompleted: (data) => {
      setProviders(data.medicalProvider);
    },
  });

  if (error) return <p>Something wrong</p>;

  return (
    <Autocomplete
      size="small"
      multiple
      margin="dense"
      options={providers}
      loading={loading}
      autoHighlight
      getOptionLabel={(option) => option.name}
      onChange={(_, values) => {
        console.log(values);
        handleFilter({
          name: "medicalProvider",
          value: values.map(({ id }) => id),
        });
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Provider"
          size="small"
          margin="dense"
          variant="outlined"
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

export default FilterProvider;
