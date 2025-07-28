import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import StepperForm from '../../../../components/StepperForm';
import type { StepThreeFormValues, StepProps } from '../../types';
import { useRegistrationStore } from '../../../../store/registrationStore';

const StepThree = ({ onBack }: StepProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StepThreeFormValues>();

  const navigate = useNavigate();

  const { setData } = useRegistrationStore();

  const onSubmit = (values: StepThreeFormValues) => {
    setData({ ...values, completed: true });
    navigate('/');
  };

  return (
    <StepperForm
      title="Step 3: About You"
      onSubmit={handleSubmit(onSubmit)}
      onBack={onBack}
      nextLabel="Finish"
    >
      <Controller
        name="aboutUs"
        control={control}
        defaultValue=""
        rules={{
          minLength: {
            value: 10,
            message:
              'Enter at least 10 characters if you wish to write something',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="About You"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            error={!!errors.aboutUs}
            helperText={errors.aboutUs?.message}
          />
        )}
      />
    </StepperForm>
  );
};

export default StepThree;
