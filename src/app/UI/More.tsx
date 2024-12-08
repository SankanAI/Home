"use client";

import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  Brain, 
  Target, 
  FileCode, 
  Globe, 
  Zap 
} from 'lucide-react';

interface SkillItem {
  name: string;
  icon: React.ElementType;
}

export default function More() {
  const skills: SkillItem[] = [
    { name: "Innovation", icon: Rocket },
    { name: "Critical Thinking", icon: Brain },
    { name: "Goal Setting", icon: Target },
    { name: "Coding", icon: FileCode },
    { name: "Global Perspective", icon: Globe },
    { name: "Entrepreneurship", icon: Zap }
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => 
        (prevIndex + 1) % skills.length
      );
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [skills.length]);

  const CurrentSkill = skills[currentSkillIndex];

  return (
    <div className="flex justify-left items-center p-0">
      <button 
        style={{transition:'ease-in-out 1s'}}
        className="flex items-center justify-center 
        bg-slate-700 text-white 
        px-6 py-3 
        rounded-full 
        transition-all 
        duration-500 
        transform hover:scale-105"
      >
        <CurrentSkill.icon className="mr-3 h-6 w-6" />
        <span className="text-lg">
          {CurrentSkill.name}
        </span>
      </button>
    </div>
  );
}