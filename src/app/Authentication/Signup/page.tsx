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
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="password">
              Reenter Password
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

