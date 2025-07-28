import type { RegistrationFields } from '../../types/registration';

export type StepProps = {
  onNext?: () => void;
  onBack?: () => void;
};

export type StepOneFormValues = Pick<
  RegistrationFields,
  'email' | 'password' | 'confirmPassword'
>;

export type StepTwoFormValues = Pick<
  RegistrationFields,
  'industry' | 'experienceInYears' | 'yourRole'
>;

export type StepThreeFormValues = Pick<RegistrationFields, 'aboutUs'>;
