import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Signup from '@/app/Authentication/Signup/page';
import { supabase } from '@/lib/supabase-client';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

// Mock dependencies
jest.mock('@/lib/supabase-client', () => ({
  supabase: {
    auth: {
      signUp: jest.fn()
    }
  }
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn()
}));

describe('Signup Component', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
  });

  it('renders signup form correctly', () => {
    render(<Signup />);
    
    expect(screen.getByText('Create an account')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Re-enter Password')).toBeInTheDocument();
    expect(screen.getByText('Create account')).toBeInTheDocument();
  });

  it('shows error for empty email and password', async () => {
    render(<Signup />);
    
    const createAccountButton = screen.getByText('Create account');
    fireEvent.click(createAccountButton);

    await waitFor(() => {
      expect(screen.getByText('Email and password are required')).toBeInTheDocument();
    });
  });

  it('shows error for mismatched passwords', async () => {
    render(<Signup />);
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const rePasswordInput = screen.getByLabelText('Re-enter Password');
    const createAccountButton = screen.getByText('Create account');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(rePasswordInput, { target: { value: 'differentpassword' } });
    
    fireEvent.click(createAccountButton);

    await waitFor(() => {
      expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
    });
  });

  it('calls supabase signup with correct parameters', async () => {
    (supabase.auth.signUp as jest.Mock).mockResolvedValue({
      data: { 
        user: { 
          email: 'test@example.com' 
        } 
      },
      error: null
    });

    render(<Signup />);
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const rePasswordInput = screen.getByLabelText('Re-enter Password');
    const createAccountButton = screen.getByText('Create account');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(rePasswordInput, { target: { value: 'password123' } });
    
    fireEvent.click(createAccountButton);

    await waitFor(() => {
      expect(supabase.auth.signUp).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
        options: {
          emailRedirectTo: 'https://9000-idx-sankan-1733390524944.cluster-fu5knmr55rd44vy7k7pxk74ams.cloudworkstations.dev/verify',
          data: {
            registration_source: 'web_signup'
          }
        }
      });
      expect(screen.getByText('Verification Email Sent')).toBeInTheDocument();
    });
  });

  it('handles signup error', async () => {
    (supabase.auth.signUp as jest.Mock).mockResolvedValue({
      data: null,
      error: { message: 'Signup failed' }
    });

    render(<Signup />);
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const rePasswordInput = screen.getByLabelText('Re-enter Password');
    const createAccountButton = screen.getByText('Create account');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(rePasswordInput, { target: { value: 'password123' } });
    
    fireEvent.click(createAccountButton);

    await waitFor(() => {
      expect(screen.getByText('Sign Up Error')).toBeInTheDocument();
    });
  });
});