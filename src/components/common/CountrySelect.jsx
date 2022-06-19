import { CircularProgress } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

const CountrySelect = ({
  name,
  control,
  loading,
  error,
  data,
  size = "normal",
  label,
}) => {
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: "Select Country" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Autocomplete
            id="select-country"
            options={data}
            autoHighlight
            margin="dense"
            size={size}
            loading={loading}
            getOptionLabel={(option) => option.name}
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
                label={label || "Choose a country"}
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
                  autoComplete: "country",
                }}
              />
            )}
            onChange={(_, value) => onChange(value?.code)}
          />
        )}
      />
    </>
  );
};

export default CountrySelect;
