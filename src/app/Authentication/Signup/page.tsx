'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Send } from 'lucide-react'
import { supabase } from '@/lib/supabase-client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function CreateAccount() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setrePassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const createUserProfile = async (user: any) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          email: user.email,
          created_at: new Date().toISOString()
        })
        .select()

      if (error) {
        console.error('Detailed profile creation error:', error)
        throw error
      }

      return data
    } catch (err) {
      console.error('Profile creation catch block:', err)
      throw err
    }
  }

  const handleEmailSignUp = async () => {

    if (!email || !password) {
      setError('Email and password are required')
      return
    }

    if(password!=repassword){
      setError('Passwords are not matching')
      return
    }
    try {
      // Signup with Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        return
      }

      // Ensure user exists
      if (data.user) {
        try {
          // Create user profile
          await createUserProfile(data.user)

          // Set cookies
          Cookies.set('userId', data.user.id, { 
            expires: 7,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
          })

          // Redirect
          router.push('/')
        } catch (profileErr) {
          // Handle profile creation error
          console.error('Profile creation failed:', profileErr)
          setError('Failed to create user profile')
        }
      }
    } catch (err) {
      setError('An unexpected error occurred')
    }
  }

  return (
    <div className="bg-[#0A0A0B] text-white p-4" style={{
      width: typeof window !== 'undefined' && window.innerWidth > 700 ? "30%" : "100%", 
      marginLeft: typeof window !== 'undefined' && window.innerWidth > 700 ? "35%" : "0%", 
      borderRadius: typeof window !== 'undefined' && window.innerWidth > 700 ? "8vh" : "0vh"
    }}>
      <div className="space-y-6 bg-[#111113] rounded-lg p-6 mb-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Create an account</h2>
          <p className="text-gray-400">Enter your email below to create your account</p>
        </div>
        
        {error && (
          <div className="text-red-500 text-sm mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              placeholder="m@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1C1C1E] border-none text-white placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#1C1C1E] border-none text-white"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="password">
              Reenter Password
            </label>
            <Input
              id="repassword"
              type="password"
              value={repassword}
              onChange={(e) => setrePassword(e.target.value)}
              className="bg-[#1C1C1E] border-none text-white"
            />
          </div>
        </div>
        <Button 
          onClick={handleEmailSignUp}
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          Create account
        </Button>
      </div>
    </div>
  )
}