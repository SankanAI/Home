"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import IconCloud from "@/components/ui/icon-cloud";
import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeamMultipleOutputDemo";
import RetroGrid from "@/components/ui/retro-grid";
import AppleCardsCarouselDemo from "./AppleCardsCarouselDemo";
import { useRouter } from "next/router";
import { RainbowButton } from "@/components/ui/rainbow-button";
import More from "./UI/More";

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
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

export default function Home() {
 
  return (
      <main style={{width:window.innerWidth>1023?'90%':'100%', marginLeft:window.innerWidth>1023?'5%':'0%', background:'rgb(2 6 23)'}}>
      <div style={{borderRadius:window.innerWidth>1023?'0px 0px 30px 30px':'0px'}}  className="relative flex  w-full flex-col items-left justify-center overflow-hidden rounded-lgs bg-slate-950">
      <div style={{display:window.innerWidth>1023?'inline-flex':'block'}}>
        <li style={{width:window.innerWidth>1023?'45%':'100%', display:'inline-flex', padding:window.innerWidth>1000?"5vh":"0vh"}}>
          <div className="relative flex max-w-lg items-center justify-center overflow-hidden  bg-slate-950 px-10 pb-10 pt-4 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </li>
        <li style={{width:window.innerWidth>1023?'60%':'100%', display:'inline-flex', padding:window.innerWidth>1023?'10vh':'3vh', textAlign:window.innerWidth>1023?"left":"center"}}>
          <div>
            <p className=" tracking-tighter text-6xl sm:text-6xl md:text-6xl  lg:text-6xl xl:text-9xl text-gray-900 dark:text-white mb-4 pt-5 text-gray-50" style={{color:'white'}}>Sankan AI</p>
            <h1 className="tracking-tight text-1xl sm:text-2xl md:text-2xl  lg:text-2xl xl:text-3xl text-gray-900 dark:text-white mb-4 text-gray-50" style={{width:window.innerWidth>1023?'75%':'100%', color:'white'}}>Today we are creating platform for Kids Coding, But we will be more</h1>
            <More/>
            <RainbowButton>Join</RainbowButton>
          </div>
        </li>
      </div>
      <p className="text-center tracking-tighter text-6xl text-gray-900 dark:text-white mb-4 pt-5 text-gray-50" style={{color:'white'}}>What is Additional ?</p>
      <AnimatedTestimonials testimonials={testimonials} />
      <RetroGrid />
      </div>
      <div style={{marginTop:'2vh'}}>
        <div style={{display:'inline-flex', width:window.innerWidth>1023?'50%':'100%', padding:window.innerWidth>1000?"8vh":"0vh"}}>
            <h1 className=" tracking-tighter text-7xl text-gray-50 "  style={{width:'100%', textAlign:window.innerWidth>1023?"left":"center", fontSize:window.innerWidth>1023?'70px':'50px'}}>
              Sankan AI <br/>
              <p className="tracking-tight text-3xl dark:text-white mb-4 text-gray-50 mt:10" style={{width:'100%', fontSize:window.innerWidth>1023?'30px':'25px'}}>Today we are creating platform for Kids Coding, But we will be more</p>
            </h1>
        </div>
        <div style={{ display:'inline-flex',width:window.innerWidth>1023?'45%':'90%',marginLeft:window.innerWidth>1000?'0%':'5%', marginTop:'3vh'}}>
          <AnimatedBeamMultipleOutputDemo/>
        </div>
      </div>
      <AppleCardsCarouselDemo/>

      </main>
  );
}
