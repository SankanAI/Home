"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

import { 
  Linkedin, 
  Github, 
  CodeIcon, 
  Target, 
  Award, 
  Briefcase, 
  MapPin 
} from "lucide-react";

export default function ShashankPortfolio() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const professionalSkills = [
    "Software Engineering", 
    "Full Stack Development", 
    "React", 
    "Node.js", 
    "Cloud Technologies", 
    "System Design"
  ];

  const professionalExperience = [
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Software Engineer",
      duration: "May 2022 - Present",
      highlights: [
        "Developed scalable web applications",
        "Implemented innovative technological solutions",
        "Collaborated with cross-functional teams"
      ]
    }
  ];

  const educationDetails = {
    college: "KLE Technological University (KLS GIT)",
    degree: "Bachelor of Engineering in Computer Science",
    graduationYear: 2022
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="w-full">
        <CardHeader className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
            <CodeIcon size={64} className="text-blue-600" />
          </div>
          <div className="text-center md:text-left">
            <CardTitle className="text-3xl font-bold text-blue-600">
              Shashank Yadahalli
            </CardTitle>
            <CardDescription className="flex items-center justify-center md:justify-start space-x-2 mt-2">
              <Briefcase className="h-5 w-5 text-gray-500" />
              <span>Software Engineer @ TCS | Full Stack Developer</span>
            </CardDescription>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://linkedin.com/in/shashank-yadahalli" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-blue-700 hover:text-blue-900" />
              </a>
              <a href="https://github.com/shashankyadahalli" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-gray-800 hover:text-black" />
              </a>
            </div>
          </div>
        </CardHeader>

        <CardContent className="mt-6">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Target className="mr-3 text-green-600" /> Vision & Mission
            </h2>
            <p className="text-gray-600">
              Passionate about creating technological solutions that make a meaningful impact on society. 
              My goal is to develop innovative tools that can solve real-world challenges and contribute 
              to societal growth through technology.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Award className="mr-3 text-yellow-600" /> Professional Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {professionalSkills.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Briefcase className="mr-3 text-blue-600" /> Professional Experience
            </h2>
            {professionalExperience.map((exp, index) => (
              <Card key={index} className="mb-4 p-4">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-gray-600">{exp.role} | {exp.duration}</p>
                <ul className="list-disc pl-5 mt-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-500">{highlight}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <MapPin className="mr-3 text-red-600" /> Education
            </h2>
            <Card className="p-4">
              <h3 className="text-xl font-semibold">{educationDetails.college}</h3>
              <p className="text-gray-600">
                {educationDetails.degree} | Graduated {educationDetails.graduationYear}
              </p>
            </Card>
          </section>

          <div className="mt-8 text-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  Collaborate with Me
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Lets Collaborate!</DialogTitle>
                  <DialogDescription>
                    Interested in building something impactful? Reach out and lets discuss your ideas.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 text-black">
                    Message me on Twitter
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}