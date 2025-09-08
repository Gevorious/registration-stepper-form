import { TextField } from '@mui/material';
import StepperForm from '../../../../components/StepperForm';
import type { StepOneFormValues, StepProps } from '../../types';
import { useForm } from 'react-hook-form';
import { useRegistrationStore } from '../../../../store/registrationStore';

const StepOne = ({ onNext }: StepProps) => {
  const { data, setData } = useRegistrationStore();

  const onSubmit = (values: StepOneFormValues) => {
    setData(values);
    onNext && onNext();
  };

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<StepOneFormValues>({ mode: 'onBlur' });

  const passValue = watch('password');

  const { email, password, confirmPassword } = data;

  return (
    <StepperForm
      title="Step 1: Account Setup"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="Email"
        type="email"
        fullWidth
        defaultValue={email}
        margin="normal"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Invalid email format',
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Password"
        type="password"
        defaultValue={password}
        fullWidth
        margin="normal"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
        onBlur={() => trigger('confirmPassword')}
      />
      <TextField
        label="Confirm Password"
        type="password"
        defaultValue={confirmPassword}
        fullWidth
        margin="normal"
        {...register('confirmPassword', {
          required: 'Please confirm your password',
          validate: (value) => value === passValue || 'Passwords do not match',
        })}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        onBlur={() => trigger('confirmPassword')}
      />
    </StepperForm>
  );
};

export default StepOne;
