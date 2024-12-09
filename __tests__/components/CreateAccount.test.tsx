// __tests__/components/CreateAccount.test.tsx

import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import CreateAccount from '@/app/Authentication/Signup/page'
import { supabase } from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'

// Mock dependencies
jest.mock('@/lib/supabase-client', () => ({
  supabase: {
    auth: {
      signUp: jest.fn()
    }
  }
}))

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn()
}))

describe('CreateAccount Component', () => {
  const mockRouter = {
    push: jest.fn()
  }

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter)
  })

  it('renders create account form', () => {
    render(<CreateAccount />)
    
    expect(screen.getByText('Create an account')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Re-enter Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Create account' })).toBeInTheDocument()
  })

  it('shows error for empty email and password', async () => {
    render(<CreateAccount />)
    
    const createAccountButton = screen.getByRole('button', { name: 'Create account' })
    fireEvent.click(createAccountButton)

    expect(await screen.findByText('Email and password are required')).toBeInTheDocument()
  })

  it('shows error when passwords do not match', async () => {
    render(<CreateAccount />)
    
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const rePasswordInput = screen.getByLabelText('Re-enter Password')
    const createAccountButton = screen.getByRole('button', { name: 'Create account' })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.change(rePasswordInput, { target: { value: 'differentpassword' } })
    fireEvent.click(createAccountButton)

    expect(await screen.findByText('Passwords do not match')).toBeInTheDocument()
  })

  it('handles successful sign-up', async () => {
    // Mock successful Supabase sign-up
    const mockUserData = {
      user: {
        id: 'test-user-id',
        email: 'test@example.com'
      }
    };

    (supabase.auth.signUp as jest.Mock).mockResolvedValue({
      data: mockUserData,
      error: null
    });

    render(<CreateAccount />)
    
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const rePasswordInput = screen.getByLabelText('Re-enter Password')
    const createAccountButton = screen.getByRole('button', { name: 'Create account' })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.change(rePasswordInput, { target: { value: 'password123' } })
    fireEvent.click(createAccountButton)

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
      })
      expect(screen.getByText('Verification Email Sent')).toBeInTheDocument()
      expect(mockRouter.push).toHaveBeenCalledWith('/verify-pending')
    })
  })

  it('handles sign-up error', async () => {
    // Mock Supabase sign-up error
    (supabase.auth.signUp as jest.Mock).mockResolvedValue({
      data: null,
      error: { message: 'Sign up failed' }
    })

    render(<CreateAccount />)
    
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const rePasswordInput = screen.getByLabelText('Re-enter Password')
    const createAccountButton = screen.getByRole('button', { name: 'Create account' })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.change(rePasswordInput, { target: { value: 'password123' } })
    fireEvent.click(createAccountButton)

    expect(await screen.findByText('Sign Up Error')).toBeInTheDocument()
  })
})