"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Fireflies from "./Fireflies"

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const socialLinksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && descriptionRef.current) {
      const tl = gsap.timeline()

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, scale: 0.8, rotationX: 45 },
        { y: 0, opacity: 1, scale: 1, rotationX: 0, duration: 1.5, ease: "power3.out" },
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0, x: -50 },
          { y: 0, opacity: 1, x: 0, duration: 1, ease: "power2.out" },
          "-=0.8",
        )
        .fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
          "-=0.6",
        )

      if (socialLinksRef.current) {
        tl.fromTo(
          socialLinksRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.4",
        )
      }
    }

    if (scrollIndicatorRef.current) {
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 3,
      })

      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 2.5 },
      )
    }
  }, [])

  return (
    <div className="outer">
      <div className="inner">
        <div className="bg relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(/images/main-back.jpg)",
              filter: "brightness(0.6) contrast(1.1)",
            }}
          />
 <Fireflies />
          <div className="absolute inset-0 bg-gradient-to-b from-grey-900/40 via-grey-900/30 to-grey-900/50" />

          <div className="absolute inset-0 flex items-center justify-center p-8 z-20">
            <div className="text-center max-w-4xl">
              <h1
                ref={titleRef}
                className="section-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                style={{
                  color: "#d1fae5",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(16, 185, 129, 0.4)",
                  fontFamily: "serif",
                }}
              >
                Alankrit Arya
              </h1>

              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl lg:text-3xl mb-8 font-medium"
                style={{
                  color: "#d1fae5",
                  textShadow: "0 0 30px rgba(167, 243, 208, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)",
                  filter: "drop-shadow(0 0 15px rgba(167, 243, 208, 0.5))",
                }}
              >
                Weaving Digital Magic Through Code
              </p>

              <p
                ref={descriptionRef}
                className="text-base md:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-emerald-900/30 p-6 rounded-2xl border border-emerald-400/40 mb-8"
                style={{
                  textShadow: "0 0 10px rgba(204, 251, 241, 0.3)",
                }}
              >
                I craft immersive web experiences that blend cutting-edge technology with enchanting design.
                Specializing in React, Next.js, and GSAP animations, I bring digital realms to life with pixel-perfect
                precision and magical user interactions.
              </p>

              <div ref={socialLinksRef} className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a
                  href="https://linkedin.com/in/alankrit-arya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 bg-teal-600/25 hover:bg-teal-600/45 backdrop-blur-sm border border-teal-400/40 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/25"
                >
                  <svg
                    className="w-5 h-5 text-teal-200 group-hover:text-teal-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-teal-100 font-medium">LinkedIn</span>
                </a>

                <a
                  href="mailto:alankrit.arya@gmail.com"
                  className="group flex items-center gap-2 px-4 py-2 bg-emerald-600/25 hover:bg-emerald-600/45 backdrop-blur-sm border border-emerald-400/40 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-400/25"
                >
                  <svg
                    className="w-5 h-5 text-emerald-200 group-hover:text-emerald-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z" />
                  </svg>
                  <span className="text-emerald-100 font-medium">Gmail</span>
                </a>

                <a
                  href="tel:+1234567890"
                  className="group flex items-center gap-2 px-4 py-2 bg-green-600/25 hover:bg-green-600/45 backdrop-blur-sm border border-green-400/40 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25"
                >
                  <svg
                    className="w-5 h-5 text-green-200 group-hover:text-green-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span className="text-green-100 font-medium">+91 8169709842</span>
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="group flex items-center gap-2 px-4 py-2 bg-cyan-600/25 hover:bg-cyan-600/45 backdrop-blur-sm border border-cyan-400/40 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
                >
                  <svg
                    className="w-5 h-5 text-cyan-200 group-hover:text-cyan-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                  <span className="text-cyan-100 font-medium">Resume</span>
                </a>
              </div>
            </div>
          </div>

          <div
            ref={scrollIndicatorRef}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-emerald-100 z-30"
          >
            <div className="text-sm mb-2 font-medium tracking-wider opacity-80">SCROLL TO EXPLORE</div>
            <div className="w-6 h-10 border-2 border-emerald-300/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-emerald-300 to-teal-300 rounded-full mt-2 animate-pulse"></div>
            </div>
            <div className="mt-2 text-emerald-300/70">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-emerald-600/25 to-transparent blur-3xl" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-1/3 right-1/4 w-48 h-48 bg-green-400/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
