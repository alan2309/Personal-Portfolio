"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Form from "@/components/contact/Form";

const Contact = () => {
  const fireflyRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    fireflyRefs.current.forEach((firefly, index) => {
      if (firefly) {
        // Random floating animation
        gsap.to(firefly, {
          x: `random(-100, 100)`,
          y: `random(-50, 50)`,
          duration: `random(3, 6)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        })

        // Pulsing glow effect
        gsap.to(firefly, {
          opacity: `random(0.3, 0.8)`,
          scale: `random(0.8, 1.2)`,
          duration: `random(2, 4)`,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.3,
        })
      }
    })
  }, [])
  return (
    
  <div className="outer">
    <div className="inner">
      <div className="bg">
        <article className="relative w-full flex flex-col items-center justify-center space-y-8 mt-20 py-28 sm:py-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  ref={el => { fireflyRefs.current[i] = el; }}
                  className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    boxShadow: "0 0 8px #fbbf24, 0 0 16px #fbbf24, 0 0 24px rgba(251, 191, 36, 0.3)",
                    filter: "blur(0.5px)",
                  }}
                />
              ))}

              {[...Array(5)].map((_, i) => (
                <div
                  key={`large-${i}`}
                  ref={el => { fireflyRefs.current[15+i] = el; }}
                  className="absolute w-3 h-3 bg-yellow-300/60 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + ((i * 20) % 40)}%`,
                    boxShadow: "0 0 15px #fde047, 0 0 30px rgba(253, 224, 71, 0.4)",
                    filter: "blur(1px)",
                  }}
                />
              ))}
            </div>

        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
           <h1 className="section-heading text-yellow-400 font-bold text-center text-5xl md:text-6xl capitalize tracking-wider">
            summon the demon
          </h1>
           <p className="text-center font-light text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
           Step into the circle, share your tales, and send your message through the ether—await the magic in reply.

          </p>
        </div>
        <Form />
      </article>
      </div>
    </div>
  </div>
  )
}

export default Contact