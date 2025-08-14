"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

export default function Home() {
  const animatingRef = useRef(false);
  const currentIndexRef = useRef(-1);
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const outerWrappersRef = useRef<HTMLDivElement[]>([]);
  const innerWrappersRef = useRef<HTMLDivElement[]>([]);
  const splitHeadingsRef = useRef<SplitText[]>([]);
  const pageRevealedRef = useRef(false);
  const clamp = gsap.utils.clamp(0, 4 - 1);

  const gotoSection = useCallback(
    (index: number, direction: number) => {
      index = clamp(index);
      if (currentIndexRef.current === index) return;

      animatingRef.current = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;
      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => {
          animatingRef.current = false;
        },
      });

      if (currentIndexRef.current >= 0) {
        gsap.set(sectionsRef.current[currentIndexRef.current], { zIndex: 0 });
        tl.to(imagesRef.current[currentIndexRef.current], {
          yPercent: -15 * dFactor,
        }).set(sectionsRef.current[currentIndexRef.current], {
          autoAlpha: 0,
        });
      }

      gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappersRef.current[index], innerWrappersRef.current[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      ).fromTo(
        imagesRef.current[index],
        { yPercent: 15 * dFactor },
        { yPercent: 0 },
        0
      );

      if (
        splitHeadingsRef.current[index] &&
        splitHeadingsRef.current[index].chars
      ) {
        tl.fromTo(
          splitHeadingsRef.current[index].chars,
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: { each: 0.02, from: "random" },
          },
          0.2
        );
      }

      currentIndexRef.current = index;
      setActiveSection(index);
    },
    [clamp]
  );

  const revealHomePage = useCallback(() => {
    if (pageRevealedRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        pageRevealedRef.current = true;
        gotoSection(0, 1);
      },
    });

    gsap.set("header", { y: -100, opacity: 0 });
    gsap.set(".hero-content", { y: 100, opacity: 0 });
    gsap.set(".hero-title", { y: 50, opacity: 0 });
    gsap.set(".hero-subtitle", { y: 30, opacity: 0 });
    gsap.set(".hero-cta", { y: 20, opacity: 0 });
    gsap.set("section", { opacity: 0 });

    tl.to(".loader-orb", {
      scale: 2,
      opacity: 1,
      duration: 0.6,
      ease: "power2.inOut",
      stagger: 0.05,
    }).to(
      ".loader-orb",
      {
        y: -100,
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.03,
      },
      "-=0.2"
    );

    tl.to(
      ".progress-fill",
      {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      ".geo-shape",
      {
        rotation: 720,
        scale: 2,
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
        stagger: 0.1,
      },
      0.3
    );

    tl.to(
      ".loader-container .w-32",
      {
        rotation: 360,
        scale: 1.5,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.8"
    );

    tl.to(
      ".loader-container",
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
      },
      "-=0.6"
    );

    tl.to(
      ".page-overlay",
      {
        clipPath: "circle(0% at 50% 50%)",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.4"
    );

    tl.to(
      "section",
      {
        opacity: 1,
        duration: 0.1,
      },
      "-=0.2"
    )
      .to(
        "header",
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      )
      .to(
        ".hero-title",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        ".hero-subtitle",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        ".hero-cta",
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        ".hero-content",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );
  }, [gotoSection]);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("section"));
      const images = Array.from(document.querySelectorAll<HTMLDivElement>(".bg"));
      const headings = gsap.utils.toArray<HTMLElement>(".section-heading");
      const outerWrappers = gsap.utils.toArray<HTMLDivElement>(".outer");
      const innerWrappers = gsap.utils.toArray<HTMLDivElement>(".inner");

      sectionsRef.current = sections;
      imagesRef.current = images;
      outerWrappersRef.current = outerWrappers;
      innerWrappersRef.current = innerWrappers;

      splitHeadingsRef.current = headings.map(
        (heading) =>
          new SplitText(heading, {
            type: "chars, words, lines",
            linesClass: "clip-text",
          })
      );

      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });

      function handleWheel(e: WheelEvent) {
        if (
          animatingRef.current ||
          document.body.classList.contains("disable-snap-scroll") ||
          !pageRevealedRef.current
        )
          return;
        e.deltaY > 0
          ? gotoSection(currentIndexRef.current + 1, 1)
          : gotoSection(currentIndexRef.current - 1, -1);
      }

      let touchStartY = 0;
      function handleTouchStart(e: TouchEvent) {
        if (
          document.body.classList.contains("disable-snap-scroll") ||
          !pageRevealedRef.current
        )
          return;
        touchStartY = e.changedTouches[0].pageY;
      }
      function handleTouchEnd(e: TouchEvent) {
        if (
          animatingRef.current ||
          document.body.classList.contains("disable-snap-scroll") ||
          !pageRevealedRef.current
        )
          return;
        const dy = e.changedTouches[0].pageY - touchStartY;
        if (dy > 10) gotoSection(currentIndexRef.current - 1, -1);
        if (dy < -10) gotoSection(currentIndexRef.current + 1, 1);
      }

      document.addEventListener("wheel", handleWheel);
      document.addEventListener("touchstart", handleTouchStart);
      document.addEventListener("touchend", handleTouchEnd);

      revealHomePage();

      return () => {
        document.removeEventListener("wheel", handleWheel);
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    });
  }, [gotoSection, revealHomePage]);

  return (
    <>
      <div className="page-overlay fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black z-50">
        <div className="loader-container absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => {
              return (
                <div
                  key={i}
                  className="loader-orb absolute rounded-full opacity-0"
                  style={{
                    width: `${4 + (i % 3) * 2}px`,
                    height: `${4 + (i % 3) * 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: `radial-gradient(circle, ${
                      i % 4 === 0
                        ? "#fbbf24"
                        : i % 4 === 1
                        ? "#f59e0b"
                        : i % 4 === 2
                        ? "#eab308"
                        : "#facc15"
                    }, transparent 70%)`,
                    boxShadow: `0 0 ${10 + (i % 3) * 5}px ${
                      i % 4 === 0
                        ? "#fbbf24"
                        : i % 4 === 1
                        ? "#f59e0b"
                        : i % 4 === 2
                        ? "#eab308"
                        : "#facc15"
                    }, 0 0 ${20 + (i % 3) * 10}px ${
                      i % 4 === 0
                        ? "#fbbf24"
                        : i % 4 === 1
                        ? "#f59e0b"
                        : i % 4 === 2
                        ? "#eab308"
                        : "#facc15"
                    }`,
                    animation: `firefly-${i % 5} ${4 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <header>
        <Navbar onNavigate={gotoSection} activeSection={activeSection} />
      </header>
      <section id="first" className="first">
        <Hero />
      </section>
      <section id="second" className="second">
        <Projects />
      </section>
      <section id="third" className="third">
        <Work />
      </section>
      <section id="fourth" className="fourth">
        <Contact />
      </section>
    </>
  );
}
