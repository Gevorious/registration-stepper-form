import { useState, useEffect } from 'react';
import { Box, Stepper, Step, StepLabel, Container } from '@mui/material';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';

import StepOne from './partials/steps/StepOne';
import StepTwo from './partials/steps/StepTwo';
import StepThree from './partials/steps/StepThree';

const steps = ['Personal Info', 'Account Details', 'Confirmation'];

const stepPaths = [
  '/registration/step-1',
  '/registration/step-2',
  '/registration/step-3',
];

const RegistrationFlow = () => {
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const navigate = useNavigate();
  const location = useLocation();

  // Map current path to step index
  const currentStep = stepPaths.indexOf(location.pathname);

  // Redirect if user tries to access steps out of order
  useEffect(() => {
    if (currentStep === -1) {
      navigate('/registration/step-1', { replace: true });
      return;
    }

    for (let i = 1; i <= currentStep; i++) {
      if (!completedSteps[i - 1]) {
        navigate(stepPaths[i - 1], { replace: true });
        break;
      }
    }
  }, [currentStep, completedSteps, navigate]);

  const markStepComplete = (stepIndex: number) => {
    setCompletedSteps((prev) => {
      const newCompleted = [...prev];
      newCompleted[stepIndex] = true;
      return newCompleted;
    });
  };

  const handleNext = () => {
    if (currentStep < stepPaths.length - 1) {
      markStepComplete(currentStep);
      navigate(stepPaths[currentStep + 1]);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      navigate(stepPaths[currentStep - 1]);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ width: '100%', mb: 4 }}>
        <Stepper activeStep={currentStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Routes>
        <Route path="step-1" element={<StepOne onNext={handleNext} />} />
        <Route
          path="step-2"
          element={<StepTwo onNext={handleNext} onBack={handleBack} />}
        />
        <Route path="step-3" element={<StepThree onBack={handleBack} />} />
        <Route path="*" element={<Navigate to="step-1" replace />} />
      </Routes>
    </Container>
  );
};

export default RegistrationFlow;
