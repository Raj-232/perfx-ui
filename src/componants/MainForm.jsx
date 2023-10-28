import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function MainForm() {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field5: '',
  });

  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Project Details', 'Configuration', 'Scenarios'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFormSubmit = () => {
    console.log(formData); // Print the form data to the console
  };

  return (
    <div className="border border-red-800 space-y-8 p-8">
          <div className="border border-red-800 p-8">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>
      <div className="border border-red-800 p-8">
        {activeStep === steps.length ? (
          <div>
            <p>Form submitted successfully!</p>
          </div>
        ) : (
            <div className="border border-red-800 space-y-8 p-8">
                <div className="border border-red-800  p-8">
            {activeStep === 0 && (
              <Step1 formData={formData} setFormData={setFormData} />
            )}
            {activeStep === 1 && (
              <Step2 formData={formData} setFormData={setFormData} />
            )}
            {activeStep === 2 && (
              <Step3 formData={formData} setFormData={setFormData} />
            )}
            </div>
               <div className="flex border border-red-800 p-8 justify-between">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              {activeStep < steps.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFormSubmit}
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainForm;