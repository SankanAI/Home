import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeedbackForm from '@/app/UI/FeedbackForm/page'; // Adjust path as needed
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

// Mock entire modules
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn()
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn()
}));

// Mock UI components to avoid rendering issues
jest.mock("@/components/ui/button", () => ({
  Button: ({ children, ...props }) => <button {...props}>{children}</button>
}));

jest.mock("@/components/ui/input", () => ({
  Input: (props) => <input {...props} />
}));

jest.mock("@/components/ui/checkbox", () => ({
  Checkbox: ({ onCheckedChange, ...props }) => (
    <input 
      type="checkbox" 
      onChange={(e) => onCheckedChange(e.target.checked)} 
      {...props} 
    />
  )
}));

jest.mock("@/components/ui/textarea", () => ({
  Textarea: (props) => <textarea {...props} />
}));

jest.mock("@/components/ui/radio-group", () => ({
  RadioGroup: ({ children, onValueChange, ...props }) => (
    <div 
      role="radiogroup" 
      onChange={(e) => onValueChange((e.target as HTMLInputElement).value)} 
      {...props}
    >
      {children}
    </div>
  ),
  RadioGroupItem: (props) => <input type="radio" {...props} />
}));

jest.mock("@/components/ui/select", () => ({
  Select: ({ children }) => <div>{children}</div>,
  SelectTrigger: ({ children }) => <div>{children}</div>,
  SelectValue: ({ placeholder }) => <div>{placeholder}</div>,
  SelectContent: ({ children }) => <div>{children}</div>,
  SelectItem: ({ children, value }) => <div data-value={value}>{children}</div>
}));

jest.mock("@/components/ui/card", () => ({
  Card: ({ children }) => <div>{children}</div>,
  CardHeader: ({ children }) => <div>{children}</div>,
  CardTitle: ({ children }) => <div>{children}</div>,
  CardDescription: ({ children }) => <div>{children}</div>,
  CardContent: ({ children }) => <div>{children}</div>
}));

jest.mock("@/components/ui/dialog", () => ({
  Dialog: ({ children }) => <div>{children}</div>,
  DialogContent: ({ children }) => <div>{children}</div>,
  DialogHeader: ({ children }) => <div>{children}</div>,
  DialogTitle: ({ children }) => <div>{children}</div>,
  DialogDescription: ({ children }) => <div>{children}</div>
}));

describe('FeedbackForm Component', () => {
  const mockPush = jest.fn();
  const mockSupabaseInsert = jest.fn();
  const mockSupabaseFrom = jest.fn().mockReturnThis();
  const mockSupabaseSelect = jest.fn().mockReturnThis();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (Cookies.get as jest.Mock).mockReturnValue('test-user-id');
    (createClient as jest.Mock).mockReturnValue({
      from: mockSupabaseFrom,
      select: mockSupabaseSelect
    });
    jest.clearAllMocks();
  });

  it('renders feedback form correctly', () => {
    render(<FeedbackForm />);
    
    expect(screen.getByText('Learning Platform Feedback')).toBeInTheDocument();
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('validates form inputs', async () => {
    render(<FeedbackForm />);
    
    const submitButton = screen.getByText('Submit Feedback');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/Age must be between 6 and 18/i)).toBeInTheDocument();
      expect(screen.getByText(/Please select at least one course/i)).toBeInTheDocument();
    });
  });

  it('submits form successfully', async () => {
    // Mock Supabase methods for successful submission
    (mockSupabaseSelect as jest.Mock).mockResolvedValue({
      data: { id: 'test-user-id', name: 'Test User' },
      error: null,
      single: jest.fn().mockResolvedValue({ data: null, error: null })
    });
    (mockSupabaseInsert as jest.Mock).mockResolvedValue({ error: null });

    render(<FeedbackForm />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Age'), { target: { value: '14' } });
    
    // Select a course interest
    const codingCheckbox = screen.getByText('Coding');
    fireEvent.click(codingCheckbox);
    
    // Submit the form
    const submitButton = screen.getByText('Submit Feedback');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Feedback submitted successfully!')).toBeInTheDocument();
    });
  });

  it('handles feedback submission errors', async () => {
    // Mock Supabase methods for submission error
    (mockSupabaseSelect as jest.Mock).mockResolvedValue({
      data: { id: 'test-user-id', name: 'Test User' },
      error: null,
      single: jest.fn().mockResolvedValue({ data: null, error: null })
    });
    (mockSupabaseInsert as jest.Mock).mockResolvedValue({
      error: { message: 'Submission failed' }
    });

    render(<FeedbackForm />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Age'), { target: { value: '14' } });
    
    // Select a course interest
    const codingCheckbox = screen.getByText('Coding');
    fireEvent.click(codingCheckbox);
    
    // Submit the form
    const submitButton = screen.getByText('Submit Feedback');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('An error occurred while submitting feedback.')).toBeInTheDocument();
    });
  });

  it('redirects if user is not logged in', async () => {
    (Cookies.get as jest.Mock).mockReturnValue(null);

    render(<FeedbackForm />);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/Authentication/login');
    });
  });
});