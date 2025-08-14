"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";
import { projectsData } from "@/public/data";
import Fireflies from "./Fireflies";

type projectType = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  tech: string[]; 
}

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [centerCardIndex, setCenterCardIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.3,
        }
      );
    }
  }, []);

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

  const handleMouseEnter = () => {
    // Disable main page scroll by adding a class to body
    document.body.classList.add("disable-snap-scroll");
  };

  const handleMouseLeave = () => {
    // Re-enable main page scroll
    document.body.classList.remove("disable-snap-scroll");
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    document.body.classList.add("disable-snap-scroll");
    e.stopPropagation();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTimeout(() => {
      document.body.classList.remove("disable-snap-scroll");
    }, 100);
    e.stopPropagation();
  };

  return (
    <div className="outer">
      <div className="inner">
        <div className="bg">
          <Fireflies />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div
              ref={containerRef}
              className="max-w-6xl w-full h-[80vh] flex flex-col bg-transparent"
            >
              <h2 className="section-heading text-4xl md:text-6xl font-bold text-white mb-12 text-center">
                Magical Projects
              </h2>

              <div
                ref={scrollContainerRef}
                className="flex-1 overflow-x-auto overflow-y-hidden scrollbar-hide px-6"
                style={{ scrollSnapType: "x mandatory" }}
                onWheel={handleWheel}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="flex gap-6 h-full items-center pb-6"
                  style={{ width: "max-content" }}
                >
                  {projectsData.map((project: projectType, index: number) => (
                    <div
                      key={project.id}
                      ref={(el) => {
                        cardsRef.current[index] = el;
                      }}
                      className={`glass-card group cursor-pointer flex-shrink-0 transition-all duration-300 ${
                        centerCardIndex === index
                          ? "transform scale-105 -translate-y-4 shadow-2xl shadow-amber-500/20"
                          : "transform scale-95"
                      }`}
                      style={{
                        width: "320px",
                        height: "480px",
                        scrollSnapAlign: "center",
                      }}
                    >
                      <div className="relative overflow-hidden rounded-t-xl">
                        <Image
                          src={typeof project.image === "string" && project.image.length > 0 ? project.image : "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          width={320}
                          height={192}
                          unoptimized
                        />
                        <div className="absolute top-4 right-4">
                          <span className="glass-badge">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-200">
                          {project.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech: string, techIndex: number) => (
                            <span key={techIndex} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <a
                          href={project.link}
                          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-200 font-medium"
                        >
                          View Project
                          <svg
                            className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center fixed top-16 lg:top-20 
        -translate-x-1/2 lg:-translate-x-0 -z-10
          left-1/2
        lg:-left-1 h-screen"
          >
            <RenderModel>
              <Staff />
            </RenderModel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
