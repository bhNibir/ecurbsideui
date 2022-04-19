import { Box, Button } from "@mui/material";
import React from "react";
import StepOption from "./StepOption";

const ManageStep = ({
  steps,
  activeStep,
  setActiveStep,
  onSubmitData,
  mutationLoading,
  validationError,
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
        //   control={control}
        //   register={register}
        onSubmitData={onSubmitData}
        mutationLoading={mutationLoading}
        validationError={validationError}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>
        )}

        <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
          {activeStep === steps.length - 1 ? "Place order" : "Next"}
        </Button>
      </Box>
    </>
  );
};

export default ManageStep;
