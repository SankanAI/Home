'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Send } from 'lucide-react'

export default function CreateAccount() {
  return (
    <div className="bg-[#0A0A0B] text-white p-4" style={{width:window.innerWidth>700?"30%":"100%", marginLeft:window.innerWidth>700?"35%":"0%", borderRadius:window.innerWidth>700?"8vh":"0vh"}}>
      {/* Create Account Section */}
      <div className="space-y-6 bg-[#111113] rounded-lg p-6 mb-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Create an account</h2>
          <p className="text-gray-400">Enter your email below to create your account</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="bg-[#1C1C1E] border-none text-white hover:bg-[#2C2C2E]"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="bg-[#1C1C1E] border-none text-white hover:bg-[#2C2C2E]"
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#111113] px-2 text-gray-400">OR CONTINUE WITH</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              placeholder="m@example.com"
              type="email"
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
              className="bg-[#1C1C1E] border-none text-white"
            />
          </div>
        </div>

        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          Create account
        </Button>
      </div>
    </div>
  )
}

