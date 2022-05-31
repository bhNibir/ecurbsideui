import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const RadioButtons = ({
  control,
  name,
  healthCareProviderValue,
  setHealthCareProviderValue,
}) => {
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
        <Controller
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <RadioGroup
              row
              value={healthCareProviderValue}
              onChange={(_, value) => {
                console.log("value", value);
                console.log("healthCareProviderValue", healthCareProviderValue);
                setHealthCareProviderValue(() => !healthCareProviderValue);
                onChange(value);
              }}
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
          )}
          name={name}
          control={control}
        />
      </FormControl>
    </>
  );
};

export default RadioButtons;
