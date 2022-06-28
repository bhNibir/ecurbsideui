import { useQuery } from "@apollo/client";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import { GET_DISEASE_CATEGORIES } from "../../../graphQL/queries";

const FilterSpecialty = ({ handleFilter }) => {
  const [SpecialtyData, setSpecialtyData] = useState([]);
  const { loading, error } = useQuery(GET_DISEASE_CATEGORIES, {
    onCompleted: (data) => {
      setSpecialtyData(data.diseasesCategories);
    },
  });

  if (error) return <p>Error :(</p>;

  return (
    <>
      <Autocomplete
        name="filterSpecialty"
        multiple
        margin="dense"
        loading={loading}
        options={SpecialtyData}
        limitTags={2}
        size="small"
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        onChange={(_, values) => {
          console.log(values);
          handleFilter({
            name: "medicalSpecialty",
            value: values.map(({ id }) => id),
          });
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={"specialty"}
            variant="outlined"
            margin="dense"
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
    </>
  );
};

export default FilterSpecialty;
