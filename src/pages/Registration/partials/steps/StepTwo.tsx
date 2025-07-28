import { MenuItem, TextField } from '@mui/material';
import StepperForm from '../../../../components/StepperForm';
import type { StepProps, StepTwoFormValues } from '../../types';
import { Controller, useForm } from 'react-hook-form';
import { useRegistrationStore } from '../../../../store/registrationStore';

const StepTwo = ({ onNext, onBack }: StepProps) => {
  const { data, setData } = useRegistrationStore();

  const onSubmit = (values: StepTwoFormValues) => {
    setData(values);
    onNext && onNext();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StepTwoFormValues>();

  const { industry, experienceInYears, yourRole } = data;

  return (
    <StepperForm
      title="Step 1: Account Setup"
      onSubmit={handleSubmit(onSubmit)}
      onBack={onBack}
    >
      <Controller
        name="industry"
        control={control}
        defaultValue={industry || 'marketing'}
        rules={{ required: 'Industry is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Industry"
            fullWidth
            margin="normal"
            error={!!errors.industry}
            helperText={errors.industry?.message}
          >
            <MenuItem value="marketing">Marketing</MenuItem>
            <MenuItem value="it">IT</MenuItem>
            <MenuItem value="finncial_services">Financial Services</MenuItem>
          </TextField>
        )}
      />

      <Controller
        name="experienceInYears"
        control={control}
        defaultValue={experienceInYears || 0}
        rules={{
          required: 'Experience is required',
          min: { value: 0, message: 'Minimum is 0' },
          max: { value: 50, message: 'Maximum is 50' },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Experience (Years)"
            type="number"
            fullWidth
            margin="normal"
            error={!!errors.experienceInYears}
            helperText={errors.experienceInYears?.message}
          />
        )}
      />

      <Controller
        name="yourRole"
        control={control}
        defaultValue={yourRole || 'developer'}
        rules={{ required: 'Role is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Your Role"
            fullWidth
            margin="normal"
            error={!!errors.yourRole}
            helperText={errors.yourRole?.message}
          >
            <MenuItem value="developer">Developer</MenuItem>
            <MenuItem value="manager">Manager</MenuItem>
            <MenuItem value="designer">Designer</MenuItem>
          </TextField>
        )}
      />
    </StepperForm>
  );
};

export default StepTwo;
