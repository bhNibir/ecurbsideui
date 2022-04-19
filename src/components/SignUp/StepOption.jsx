import React from "react";
import PersonalForm from "./PersonalForm";
import ProfessionalFrom from "./ProfessionalFrom";

const StepOption = ({
  step,
  control,
  register,
  onSubmitData,
  mutationLoading,
  validationError,
}) => {
  switch (step) {
    case 0:
      return (
        <PersonalForm
          control={control}
          onSubmitData={onSubmitData}
          mutationLoading={mutationLoading}
          validationError={validationError}
        />
      );
    case 1:
      return <ProfessionalFrom control={control} register={register} />;
    default:
      throw new Error("Unknown step");
  }
};

export default StepOption;
