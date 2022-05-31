import React from "react";
import PersonalForm from "./PersonalForm";
import ProfessionalFrom from "./ProfessionalFrom";

const StepOption = ({ register, step, setValue, control, validationError }) => {
  switch (step) {
    case 0:
      return (
        <PersonalForm
          control={control}
          setValue={setValue}
          validationError={validationError}
          register={register}
        />
      );
    case 1:
      return (
        <ProfessionalFrom
          control={control}
          setValue={setValue}
          validationError={validationError}
        />
      );
    default:
      throw new Error("Unknown step");
  }
};

export default StepOption;
