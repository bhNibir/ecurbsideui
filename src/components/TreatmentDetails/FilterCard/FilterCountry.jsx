import { useQuery } from "@apollo/client";
import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import { GET_COUNTRIES_LIST } from "../../../graphQL/queries";

const FilterCountry = () => {
  const [countries, setCountries] = useState([]);

  const { loading, error } = useQuery(GET_COUNTRIES_LIST, {
    onCompleted: (data) => {
      setCountries(data.countryList);
    },
  });

  if (error) return <p>Something wrong</p>;

  return (
    <Autocomplete
      size="small"
      margin="dense"
      // sx={{ width: 300 }}
      options={countries}
      loading={loading}
      autoHighlight
      getOptionLabel={(option) => option.name}
      onChange={(_, values) => {
        console.log(values);
        // name, values.map(({ id }) => id);
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="country"
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

export default FilterCountry;
