import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const RadioButtons = ({ name, value, setValue }) => {
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
          onChange={() => setValue(!value)}
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
