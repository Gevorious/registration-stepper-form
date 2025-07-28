import { create } from 'zustand';

export type RegistrationData = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  industry?: 'marketing' | 'it' | 'financial_services';
  experienceInYears?: number;
  yourRole?: 'developer' | 'manager' | 'designer';
  aboutUs?: string;
  completed?: boolean;
};

type RegistrationStore = {
  data: RegistrationData;
  setData: (newData: Partial<RegistrationData>) => void;
  reset: () => void;
};

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  data: {},
  setData: (newData) =>
    set((state) => ({
      data: { ...state.data, ...newData },
    })),
  reset: () => set({ data: {} }),
}));
