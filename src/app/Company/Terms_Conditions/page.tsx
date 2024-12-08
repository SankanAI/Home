import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ShieldCheck, Rocket, BookOpen } from "lucide-react";

export default function SankanAITermsPage() {
  const termsData = [
    {
      title: "Welcome to Sankan AI! 🚀",
      content: "An exciting learning platform designed specifically for 6th-grade students. These Terms and Conditions help keep everyone safe, happy, and learning.",
      icon: <Rocket className="h-6 w-6 text-blue-500" />
    },
    {
      title: "User Eligibility",
      content: "- Must be between 10-13 years old\n- Parental/guardian permission required\n- Adult supervision of online activities",
      icon: <ShieldCheck className="h-6 w-6 text-green-500" />
    },
    {
      title: "User Conduct Guidelines",
      content: "- Be kind and respectful\n- No bullying\n- No sharing personal information\n- Use appropriate language\n- Support fellow learners",
      icon: <BookOpen className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Safety and Protection",
      content: "- Moderated interactions\n- Parental control dashboard\n- Age-appropriate content filters\n- Regular safety updates\n- Minimal personal data collection",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-600">
            Sankan AI - Terms and Conditions
          </CardTitle>
          <CardDescription>
            Your Gateway to Safe and Fun Learning! 📚🚀
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {termsData.map((term, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center space-x-4">
                    {term.icon}
                    <span className="text-lg font-semibold">{term.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="whitespace-pre-line">{term.content}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-6 flex justify-between items-center">
            <Badge variant="outline" className="text-sm">
              Last Updated: {new Date().toLocaleDateString()}
            </Badge>
            <div className="flex space-x-2">
              <Badge variant="secondary">Safe</Badge>
              <Badge variant="secondary">Educational</Badge>
              <Badge variant="secondary">Fun</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}