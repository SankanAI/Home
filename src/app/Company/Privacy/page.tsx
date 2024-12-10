"use client";

import React from 'react';
import { 
  Shield, 
  Lock, 
  BookOpen, 
  Star, 
  Check, 
  XCircle, 
  Mail, 
  Info 
} from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicyPage() {

  const policySections = [
    {
      title: "What We Collect 📦",
      icon: BookOpen,
      content: "We collect minimal, kid-safe information to personalize your learning journey."
    },
    {
      title: "Safety First 🛡️",
      icon: Shield,
      content: "Your data is protected with military-grade encryption and strict privacy controls."
    },
    {
      title: "Parental Control 🦸‍♀️",
      icon: Lock,
      content: "Parents have full visibility and control over their child's account and learning progress."
    }
  ];

  const digitalRights = [
    "Know what data we collect",
    "Request data deletion",
    "Stop data collection",
    "Safe learning environment"
  ];

  return (
    <div className="container mx-auto p-6 space-y-8 w-[90%] lg:w-[70%] ml-[5%] lg:ml-[15%]">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Shield className="text-white" /> Sankan AI Privacy Promise
        </h1>
        <p className="text-muted-foreground">
          Learning is our mission, keeping you safe is our superpower! 🚀
        </p>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Lock className="text-green-500" /> 
            Our Privacy Commitment
            <Badge variant="secondary">Kid-Friendly</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            {policySections.map((section, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <section.icon className="text-blue-500" />
                    {section.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {section.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Star className="text-yellow-500" /> 
              Your Digital Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {digitalRights.map((right, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-green-500" /> {right}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <XCircle className="text-red-500" /> 
              What We DONT Do
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500" /> No home addresses
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500" /> No phone numbers
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="text-red-500" /> No selling data
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center space-y-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 mx-auto text-black">
              <Mail /> Contact Our Support
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='text-black'>Contact Sankan AI Support</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-black">
              <p>Email: support@sankanai.com</p>
              <p>Parent Dashboard: https://parents.sankanai.com</p>
            </div>
          </DialogContent>
        </Dialog>

        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Info className="text-blue-500" />
          Last Updated: December 2024 | Version 1.0
        </p>
      </div>
    </div>
  );
}