"use client";
import * as React from 'react'
import Link from 'next/link'
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import Sankan from '/public/Sankan.svg'
import Image from 'next/image';

function Copyright() {
  return (
    <p className="text-base text-slate-50 mt-1">
      {'Copyright © '}
      <Link href="https://mui.com/" className="text-slate-50">
        Sankan AI
      </Link>
      {' '}
      {new Date().getFullYear()}
    </p>
  )
}

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 sm:py-10" style={{paddingTop:'10vh'}}>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
        {/* Newsletter Section */}
        <div className="col-span-1 sm:col-span-2 pl-[15vh] lg:pl-[0vh]">
          <Image src={Sankan} alt="logo" width={110} height={110} style={{borderRadius:'50px',padding:'8px', border:'3px solid white'}}/>
          <h4 className="text-base font-semibold mt-2 pl-[2vh] lg:pl-[0vh]">Sankan AI</h4>
          <p className="text-base text-white mb-2 pl=[2vh] lg:pl-[0vh]">
            Building Something that can change !
          </p>
        </div>

        {/* Product Links */}
        <div className="hidden sm:flex flex-col space-y-2 text-base" style={{textAlign:'right'}}>
          <h5 className="text-2xl font-semibold">Product</h5>
          <Link href="/" className="text-base text-slate-50">Features</Link>
          <Link href="/UI/FeedbackForm" className="text-base text-slate-50">Feedback</Link>
          <Link href="/UI/FeedbackForm" className="text-base text-slate-50">Provide Ideas</Link>
          <Link href="/Company/Meet_Dev" className="text-base text-slate-50">Meet the Dev</Link>
          <Link href="/Company/About" className="text-base text-slate-50">About</Link>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <Link href="/Company/Privacy" className="text-base text-slate-50">Privacy Policy</Link>
          <span className="text-slate-50">•</span>
          <Link href="/Company/Terms_Conditions" className="text-base text-slate-50">Terms of Service</Link>
          <Copyright />
        </div>

        <div className="flex space-x-2">
          <Link 
            href="https://github.com/its-shashanky" 
            className="text-slate-50 hover:text-foreground"
            aria-label="GitHub"
          >
            <IconBrandGithub className="h-6 w-6" />
          </Link>
          <Link 
            href="https://x.com/MaterialUI" 
            className="text-slate-50 hover:text-foreground"
            aria-label="X"
          >
            <IconBrandX className="h-6 w-6" />
          </Link>
          <Link 
            href="https://www.linkedin.com/company/mui/" 
            className="text-slate-50 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}