export type RegistrationFields = {
  email: string;
  password: string;
  confirmPassword: string;
  industry: 'marketing' | 'it' | 'financial_services';
  experienceInYears: number;
  yourRole: 'developer' | 'manager' | 'designer';
  aboutUs?: string;
};
