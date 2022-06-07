import React from "react";
import StepOption from "./StepOption";

const ManageStep = ({
  steps,
  activeStep,
  setActiveStep,
  mutationLoading,
  validationError,
  userData,
  setUserData,
  onSubmitData,
}) => {
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <StepOption
        step={activeStep}
        validationError={validationError}
        mutationLoading={mutationLoading}
        userData={userData}
        setUserData={setUserData}
        onSubmitData={onSubmitData}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </>
  );
};

export default ManageStep;
