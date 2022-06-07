import React from "react";
import PersonalForm from "./PersonalForm";
import ProfessionalFrom from "./ProfessionalFrom";

const StepOption = ({
  step,
  validationError,
  mutationLoading,
  userData,
  setUserData,
  onSubmitData,
  handleBack,
  handleNext,
}) => {
  switch (step) {
    case 0:
      return (
        <PersonalForm
          validationError={validationError}
          mutationLoading={mutationLoading}
          userData={userData}
          setUserData={setUserData}
          handleNext={handleNext}
        />
      );
    case 1:
      return (
        <ProfessionalFrom
          validationError={validationError}
          mutationLoading={mutationLoading}
          onSubmitData={onSubmitData}
          handleBack={handleBack}
        />
      );
    default:
      throw new Error("Unknown step");
  }
};

export default StepOption;
