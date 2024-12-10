'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from '@/lib/supabase-client'
import Cookies from 'js-cookie';

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRePassword] = useState('')
  const [toast, setToast] = useState({
    show: false,
    title: '',
    description: '',
    type: 'default'
  })
  const router = useRouter()


  useEffect(()=>{
    if(Cookies.get('userId')){
     router.push('/')
    }
// Suggested code may be subject to a license. Learn more: ~LicenseLog:108453134.
 },[email, password, repassword, router])

  const showToast = (title: string, description: string, type: 'default' | 'destructive' = 'default') => {
    setToast({ show: true, title, description, type })
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setToast({ show: false, title: '', description: '', type: 'default' })
    }, 3000)
  }

  const handleEmailSignUp = async () => {
    // Validation
    if (!email || !password) {
      showToast('Error', 'Email and password are required', 'destructive')
      return
    }

    if (password !== repassword) {
      showToast('Error', 'Passwords do not match', 'destructive')
      return
    }

    try {
      // Sign up user with verification redirect to localhost
      const { data, error } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          emailRedirectTo: 'https://9000-idx-sankan-1733390524944.cluster-fu5knmr55rd44vy7k7pxk74ams.cloudworkstations.dev/verify',
          data: {
            registration_source: 'web_signup'
          }
        }
      })

      if (error) {
        showToast('Sign Up Error', error.message, 'destructive')
        return
      }

      if (data.user) {
        showToast('Verification Email Sent', 'Please check your email to verify your account')
        // Optionally redirect to a verification pending page
        router.push('/verify-pending')
      }
    } catch (err) {
      console.error('Unexpected error during sign-up:', err)
      showToast('Unexpected Error', 'An unexpected error occurred', 'destructive')
    }
  }

  return (
    <>
      <div
        className="bg-[#0A0A0B] text-white p-4 w-full lg:w-[30%] lg:ml-[35%] lg:rounded-[8vh] rounded-0"
      >
        <div className="space-y-6 bg-[#111113] rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold">Create an account</h2>
          <p className="text-gray-400">Enter your email below to create your account</p>

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium">
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

            <div>
              <label htmlFor="password" className="text-sm font-medium">
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

            <div>
              <label htmlFor="repassword" className="text-sm font-medium">
                Re-enter Password
              </label>
              <Input
                id="repassword"
                type="password"
                value={repassword}
                onChange={(e) => setRePassword(e.target.value)}
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

      {/* Custom Toast Implementation */}
      {toast.show && (
        <div 
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg 
            ${toast.type === 'destructive' 
              ? 'bg-red-500 text-white' 
              : 'bg-green-500 text-white'}`}
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold">{toast.title}</div>
              <div className="text-sm">{toast.description}</div>
            </div>
            <button 
              onClick={() => setToast({ show: false, title: '', description: '', type: 'default' })}
              className="ml-4 focus:outline-none"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}