"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
       <p style={{textAlign:'center'}} className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl text-neutral-800 text-slate-100 dark:text-neutral-200">
        What We Offer
      </p>
      <Carousel items={cards} />
    </div>
  );
}
const Variables=[
  {
    "Description":"Gamified learning turns education into an engaging adventure, using game mechanics like points, badges, leaderboards, and challenges to motivate learners. It fosters curiosity by making information interactive, allowing users to level up as they acquire new knowledge. Mini-games, quizzes, and role-playing scenarios help solidify understanding, while progress tracking ensures a sense of achievement. By integrating rewards and competition, gamified learning transforms traditional education into a fun, immersive, and memorable experience tailored to diverse learning styles.",
    "img":"https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
     "Description":"An interactive session fosters active engagement by blending discussions, activities, and real-time feedback. Participants explore information through Q&A, brainstorming, or simulations, encouraging collaboration and critical thinking. Tools like polls, quizzes, and breakout groups make the session dynamic, ensuring every voice is heard. Visual aids, live demonstrations, and storytelling enhance understanding, while open-ended questions spark curiosity. By creating a two-way dialogue, interactive sessions transform passive learning into an enriching experience where participants actively contribute and retain knowledge effectively.",
     "img":"https://images.pexels.com/photos/301792/pexels-photo-301792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  { 
      "Description":"In a bustling town, Ava, a curious librarian, discovered an enchanted book named The Key to Knowledge. Each page led her into vivid worlds—science as a galaxy of stars, history as a parade of ancient rulers, and technology as a vibrant city of circuits. To unlock secrets, she solved riddles, pieced puzzles, and faced moral choices that shaped her journey. Alongside fellow adventurers, she learned that information wasn't just facts—it was the power to connect, grow, and shape the future. Her quest revealed: knowledge is the ultimate treasure.",
      "img":"https://images.pexels.com/photos/6321619/pexels-photo-6321619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
      "Description":"AI transforms information into actionable insights by analyzing vast data, identifying patterns, and delivering precise recommendations. It personalizes learning, tailoring content to individual needs, and makes information accessible via chatbots, voice assistants, or intelligent search. AI predicts trends, automates tedious tasks, and uncovers hidden opportunities, enhancing decision-making across industries. With real-time updates and adaptive systems, AI doesn’t just process information—it evolves with it, empowering humans to innovate, collaborate, and solve complex challenges with unparalleled efficiency.",
      "img":"https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
      "Description":"Learning in public means sharing your learning journey openly, turning each step into a resource for others. It’s about documenting progress, mistakes, and breakthroughs on platforms like blogs, social media, or GitHub. This approach fosters accountability, builds community, and accelerates growth through feedback and collaboration. By sharing insights, you inspire and learn from peers, turning information into a shared asset. It’s not about being an expert but embracing growth and making knowledge accessible, creating a ripple effect of curiosity and innovation.",
      "img":"https://images.pexels.com/photos/7244576/pexels-photo-7244576.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const DummyContent = ({ val }: { val: number }) => {
  return (
          <div
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
              {Variables[val].Description}
            </p>
            <Image
              src={Variables[val].img}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        )
};

const data = [
  {
    category: "Gamified Learning",
    title: "A Game is more Intresting to do than one sided learning",
    src: "https://images.pexels.com/photos/1293260/pexels-photo-1293260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent val={0}/>,
  },
  {
    category: "Interactive Sessions",
    title: "Two Way Interaction between various component",
    src: "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent val={1}/>,
  },
  {
    category: "Story Based",
    title: "A Story behind everything will make boring things Intresting",
    src: "https://images.pexels.com/photos/2678108/pexels-photo-2678108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent val={2}/>,
  },

  {
    category: "AI Integrated",
    title: "Stuck while learning, Now AI Will help",
    src: "https://images.pexels.com/photos/8294666/pexels-photo-8294666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent val={3}/>,
  },
  {
    category: "Learn in Public",
    title: "Building or Learning in public invite for more opportunity",
    src: "https://images.pexels.com/photos/6334056/pexels-photo-6334056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent val={4}/>,
  },
];
