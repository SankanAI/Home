"use client";
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Rocket, 
  Lightbulb, 
  Users, 
  ChevronsLeftRightEllipsis, 
  BookOpen, 
  Trophy 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

export default function AboutUsSection() {
  const [activeTab, setActiveTab] = useState('mission');

  const companyValues = [
    {
      icon: Rocket,
      title: "Innovative Learning",
      description: "Transform coding education through gamification and interactive experiences."
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "Empower students to think critically and develop real-world problem-solving skills."
    },
    {
      icon: Users,
      title: "Inclusive Education",
      description: "Create an accessible learning environment for students from all backgrounds."
    }
  ];

  const learningApproaches = [
    {
      title: "Game-Based Learning",
      content: "Our platform turns coding challenges into exciting game scenarios, making learning enjoyable and engaging.",
      icon: ChevronsLeftRightEllipsis 
    },
    {
      title: "Life Skills Integration",
      content: "Beyond coding, we teach crucial life skills like teamwork, communication, and creative thinking.",
      icon: BookOpen
    },
    {
      title: "Personalized Learning Paths",
      content: "Adaptive curriculum that adjusts to each student's pace, strengths, and learning style.",
      icon: Target
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-blue-600 mb-4">
            Coding Adventures: Learn, Play, Grow
          </CardTitle>
          <CardDescription className="text-xl text-gray-600">
            Transforming education through interactive, game-based learning experiences
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Company Values Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center">
              <Trophy className="mr-3 text-yellow-500" /> Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {companyValues.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <value.icon className="mr-4 text-blue-600" size={40} />
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Learning Approaches Accordion */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              How We Teach
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {learningApproaches.map((approach, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center">
                      <approach.icon className="mr-4 text-green-600" size={24} />
                      <span className="text-lg">{approach.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 pl-8">{approach.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Join Our Learning Community
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Start Your Coding Adventure!</DialogTitle>
                  <DialogDescription>
                    Unlock a world of interactive learning and skill development.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary">Game-Based Learning</Badge>
                    <Badge variant="secondary">Life Skills</Badge>
                    <Badge variant="secondary">Fun Coding</Badge>
                  </div>
                  <p className="text-gray-600">
                    Join thousands of students who are transforming their futures through playful, engaging coding education.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}