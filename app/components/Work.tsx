"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
// import { workExperience } from "@/public/data"
// import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Fireflies from "./Fireflies"

// type Job = {
//   id: string | number
//   title: string
//   company: string
//   location: string
//   description: string
//   startDate: string
//   endDate: string
//   daysWorked: number
// }

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);
   const scrollContainerRef = useRef<HTMLDivElement>(null);
    // const [centerCardIndex, setCenterCardIndex] = useState(0);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([])

    useEffect(() => {
      const handleScroll = () => {
        if (!scrollContainerRef.current) return;
  
        const container = scrollContainerRef.current;
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
  
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;
  
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(cardCenter - containerCenter);
  
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
  
        setCenterCardIndex(closestIndex);
      };
  
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        scrollContainer.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call
      }
  
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);
    // const handleMouseEnter = () => {
    //     // Disable main page scroll by adding a class to body
    //     document.body.classList.add("disable-snap-scroll");
    //   };
    
    //   const handleMouseLeave = () => {
    //     // Re-enable main page scroll
    //     document.body.classList.remove("disable-snap-scroll");
    //   };
    
    //   const handleWheel = (e: React.WheelEvent) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //   };
    
    //   const handleTouchStart = (e: React.TouchEvent) => {
    //     document.body.classList.add("disable-snap-scroll");
    //     e.stopPropagation();
    //   };
    
    //   const handleTouchMove = (e: React.TouchEvent) => {
    //     e.stopPropagation();
    //   };
    
    //   const handleTouchEnd = (e: React.TouchEvent) => {
    //     setTimeout(() => {
    //       document.body.classList.remove("disable-snap-scroll");
    //     }, 100);
    //     e.stopPropagation();
    //   };
    

  return (
      <div className="outer">
        <div className="inner">
          <div className="bg">
            {/* Background with mystical overlay */}
            <Fireflies/>

            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div
              ref={containerRef}
              className="max-w-6xl w-full h-[80vh] flex flex-col bg-transparent"
            >
<h2 className="section-heading text-4xl md:text-2xl font-bold text-white mb-12 text-center"
style={{
                  color: "#d1fae5",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(128, 0, 129, 0.8)",
                  fontFamily: "serif",
                }}>
                Arcane Work Experience
              </h2>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Work
