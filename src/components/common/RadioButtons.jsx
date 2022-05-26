import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect } from "react";

const RadioButtons = ({ name }) => {
  const [value, setValue] = React.useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log("Are you a health care provider ? ", value);
  }, [value]);

  return (
    <>
      <FormControl
        fullWidth
        sx={{
          marginTop: "1rem",
          marginLeft: "1rem",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        margin="dense"
      >
        <FormLabel id="controlled-radio-buttons-group">
          Are you a health care provider ?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="controlled-radio-buttons-group"
          name={name}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value={true}
            control={<Radio size="small" color="success" />}
            label="Yes"
          />
          <FormControlLabel
            value={false}
            control={<Radio size="small" color="error" />}
            label="No"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioButtons;
