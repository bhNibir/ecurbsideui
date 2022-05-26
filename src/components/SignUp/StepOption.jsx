import React from "react";
import PersonalForm from "./PersonalForm";
import ProfessionalFrom from "./ProfessionalFrom";

const StepOption = ({ step, setValue, control, validationError }) => {
  switch (step) {
    case 0:
      return (
        <PersonalForm
          control={control}
          setValue={setValue}
          validationError={validationError}
        />
      );
    case 1:
      return <ProfessionalFrom control={control} />;
    default:
      throw new Error("Unknown step");
  }
};

export default StepOption;
