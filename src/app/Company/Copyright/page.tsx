import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Copyright, Shield, Book, Lock } from "lucide-react";

export default function SankanAICopyrightPage() {
  const copyrightSections = [
    {
      title: "Copyright Ownership",
      content: "All content, design, graphics, compilation, digital assets, and other intellectual property on Sankan AI are the exclusive property of Sankan AI and its creators. This includes but is not limited to:\n- Educational content\n- Interactive learning modules\n- Software interfaces\n- Unique game designs\n- Original artwork and illustrations",
      icon: <Copyright className="h-6 w-6 text-blue-500" />
    },
    {
      title: "User-Generated Content",
      content: "When users create content within Sankan AI:\n- Users retain ownership of their original creations\n- Sankan AI receives a non-exclusive, worldwide license to use, display, and promote user content\n- Users grant permission for their content to be used for educational and promotional purposes\n- Inappropriate or harmful content can be removed without notice",
      icon: <Book className="h-6 w-6 text-green-500" />
    },
    {
      title: "Licensing and Permissions",
      content: "Use of Sankan AI content is strictly regulated:\n- No commercial reproduction without written consent\n- Educational and personal use permitted\n- Digital content cannot be downloaded, copied, or redistributed\n- Attribution required for any permitted use\n- Violation may result in legal action",
      icon: <Shield className="h-6 w-6 text-purple-500" />
    },
    {
      title: "Copyright Protection",
      content: "Sankan AI implements robust protection mechanisms:\n- Digital Rights Management (DRM)\n- Regular content monitoring\n- Watermarking of digital assets\n- Legal team dedicated to intellectual property protection\n- Compliance with international copyright laws",
      icon: <Lock className="h-6 w-6 text-red-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-600">
            Sankan AI - Copyright Policy
          </CardTitle>
          <CardDescription>
            Protecting Creativity, Inspiring Learning 🌟📚
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {copyrightSections.map((section, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center space-x-4">
                    {section.icon}
                    <span className="text-lg font-semibold">{section.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="whitespace-pre-line">{section.content}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-6 flex justify-between items-center">
            <Badge variant="outline" className="text-sm">
              © {new Date().getFullYear()} Sankan AI. All Rights Reserved.
            </Badge>
            <div className="flex space-x-2">
              <Badge variant="secondary">Protected</Badge>
              <Badge variant="secondary">Secure</Badge>
              <Badge variant="secondary">Innovative</Badge>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            For copyright inquiries, please contact: 
            <a href="mailto:copyright@sankanai.com" className="ml-2 text-blue-600 hover:underline">
              copyright@sankanai.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}