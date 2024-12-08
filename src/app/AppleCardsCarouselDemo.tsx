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

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
              <span className=" text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Gamified Learning",
    title: "A Game is more Intresting to do than one sided learning",
    src: "https://images.pexels.com/photos/1293260/pexels-photo-1293260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent />,
  },
  {
    category: "Interactive Sessions",
    title: "Two Way Interaction between various component",
    src: "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent />,
  },
  {
    category: "Story Based",
    title: "A Story behind everything will make boring things Intresting",
    src: "https://images.pexels.com/photos/2678108/pexels-photo-2678108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent />,
  },

  {
    category: "AI Integrated",
    title: "Stuck while learning, Now AI Will help",
    src: "https://images.pexels.com/photos/8294666/pexels-photo-8294666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent />,
  },
  {
    category: "Learn in Public",
    title: "Building or Learning in public invite for more opportunity",
    src: "https://images.pexels.com/photos/6334056/pexels-photo-6334056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: <DummyContent />,
  },
];
