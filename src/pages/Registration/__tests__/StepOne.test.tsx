import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRegistrationStore } from '../../../store/registrationStore';
import StepOne from '../partials/steps/StepOne';

jest.mock('../../../store/registrationStore', () => ({
  useRegistrationStore: jest.fn(),
}));

describe('StepOne Component', () => {
  const mockSetData = jest.fn();
  const mockOnNext = jest.fn();

  beforeEach(() => {
    (useRegistrationStore as unknown as jest.Mock).mockReturnValue({
      data: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      setData: mockSetData,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all form fields', () => {
    render(<StepOne onNext={mockOnNext} />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
  });

  it('shows validation errors on empty submit', async () => {
    render(<StepOne onNext={mockOnNext} />);

    fireEvent.click(screen.getByRole('button', { name: /next/i }));

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/password is required/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/please confirm your password/i),
    ).toBeInTheDocument();
  });

  it('calls setData and onNext on valid submit', async () => {
    render(<StepOne onNext={mockOnNext} />);

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /next/i }));

    await screen.findByLabelText(/Email/i);

    expect(mockSetData).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password123',
    });

    expect(mockOnNext).toHaveBeenCalled();
  });
});
