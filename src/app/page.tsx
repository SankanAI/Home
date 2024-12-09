"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import IconCloud from "@/components/ui/icon-cloud";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeamMultipleOutputDemo";
import RetroGrid from "@/components/ui/retro-grid";
import AppleCardsCarouselDemo from "./AppleCardsCarouselDemo";
import { useRouter } from "next/navigation";
import { RainbowButton } from "@/components/ui/rainbow-button";
import More from "./UI/More";
import {useState} from 'react';

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

 const testimonials = [
    {
      quote:
        "Empowering minds to analyze, evaluate, and solve complex problems with logic and creativity, enabling students to make informed decisions in an increasingly complex world",
      name: "Critical Thinking",
      designation: "Empowering minds to analyze, evaluate, and solve",
      src: "https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Developing the mental flexibility to learn, unlearn, and relearn, embracing change as an opportunity for growth and staying resilient in a rapidly evolving global landscape.",
      name: "Adaptiblity",
      designation: "Developing the mental flexibility to learn, unlearn, and relearn, embracing change",
      src: "https://images.unsplash.com/photo-1718823995346-23ee50de8abd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Equipping young minds with the knowledge to understand money management, investing, budgeting, and making smart financial decisions.",
      name: "Financial literacy",
      designation: "Equipping young minds with the knowledge to understand money",
      src: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Mastering the art of clear, effective, and empathetic interaction across diverse platforms, cultures, and contexts, essential for collaboration, leadership, and personal relationships",
      name: "Communication",
      designation: "Mastering the art of clear, effective, and empathetic interaction",
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29tbXVuaWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      quote:
        "The universal language of innovation, teaching students to transform ideas into digital solutions, develop logical reasoning, and become creators rather than just consumers of technology",
      name: "Programming",
      designation: "The universal language of innovation, teaching students to transform ideas into digital solutions",
      src: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

export default function Home() {
    const router = useRouter();
    const [hovered, setHovered] = useState(false);
    const [position, setPosition] = useState<{ x: number; y: number } | null>(
      null
    );
  
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setHovered(true);
      console.log(hovered)
      setPosition({
        x: rect.right + 10, // Place the HTML content 10px to the right of the hovered element
        y: rect.top,
      });
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
      setPosition(null);
    };
 
  return (
      <main className="w-full ml-0 bg-[#020617] lg:w-[90%] lg:ml-[5%]">
      <div className="relative flex w-full flex-col items-left justify-center overflow-hidden bg-slate-950 rounded-none lg:rounded-b-[30px]">
      <div className="block lg:inline-flex">
        <li className="w-full lg:w-[45%] inline-flex lg:p-[5vh] p-0">
          <div className="relative flex max-w-lg items-center justify-center overflow-hidden  bg-slate-950 px-10 pb-10 pt-4 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </li>
        <li className="w-full lg:w-[60%] inline-flex p-[3vh] lg:p-[10vh] text-center lg:text-left">
          <div>
            <p className=" tracking-tighter text-6xl sm:text-6xl md:text-6xl  lg:text-6xl xl:text-9xl text-gray-900 dark:text-white mb-4 pt-5 text-gray-50" style={{color:'white'}}>Sankan AI</p>
            <h1 className="tracking-tight text-1xl sm:text-2xl md:text-2xl  lg:text-2xl xl:text-3xl text-gray-900 dark:text-white mb-4 text-gray-50" style={{ color:'white'}}>Unlock
            <span className="p-[0.3vh] px-[1vh] rounded-[2vh] bg-blue-500 cursor-pointer border-[5px] border-black" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Creativity</span>, One Pixel at a Time</h1>
            <RainbowButton className="my-4" onClick={()=>{router.push("/Authentication/login")}}>Join Waitlist</RainbowButton>
            {position && (
        <div
          className="absolute bg-gray-100 text-black p-3 rounded shadow-lg"
          style={{
            top: position.y,
            left: position.x,
            transition:'ease-in-out 1s'
          }}
        >
         <More/>
        </div>
      )}
          </div>
        </li>
      </div>
      <p className="text-center tracking-tighter text-6xl text-gray-900 dark:text-white mb-4 pt-5 text-gray-50" style={{color:'white'}}>What is Additional ?</p>
      <AnimatedTestimonials testimonials={testimonials} />
      <RetroGrid />
      </div>
      <div className="mt-[2vh]">
        <div className="inline-flex w-full lg:w-[50%] p-0 lg:p-[8vh]">
            <h1 className="w-full text-gray-50 text-7xl lg:text-[70px] text-[50px] lg:text-left text-center tracking-tighter">
              Sankan AI <br/>
              <p className="w-full text-3xl dark:text-white text-gray-50 tracking-tight mb-4 mt-10 lg:text-[23px] text-[18px]">Spark is a revolutionary learning platform that transforms education into an adventure, blending critical thinking, coding, financial wisdom, communication skills, and adaptability through gamified, interactive challenges that make learning irresistibly fun for the next generation of innovators.</p>
            </h1>
        </div>
        <div className="inline-flex w-full lg:w-[45%] lg:ml-0 ml-[5%] mt-[3vh]">
          <AnimatedBeamMultipleOutputDemo/>
        </div>
      </div>
      <AppleCardsCarouselDemo/>

      </main>
  );
}
