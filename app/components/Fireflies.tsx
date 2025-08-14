import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const Fireflies = () => {
  const firefliesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate each firefly with random movement
    firefliesRef.current.forEach((firefly) => {
      if (!firefly) return;

      // Random initial position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;

      gsap.set(firefly, {
        x: startX,
        y: startY,
        opacity: Math.random() * 0.8 + 0.2,
      });

      // Create floating animation
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(firefly, {
        x: `+=${(Math.random() - 0.5) * 200}`,
        y: `+=${(Math.random() - 0.5) * 150}`,
        duration: 3 + Math.random() * 4,
        ease: "sine.inOut",
      }).to(firefly, {
        x: `+=${(Math.random() - 0.5) * 200}`,
        y: `+=${(Math.random() - 0.5) * 150}`,
        duration: 3 + Math.random() * 4,
        ease: "sine.inOut",
      });

      // Pulsing glow effect
      gsap.to(firefly, {
        opacity: 0.2,
        duration: 1.5 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      });
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 15 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) firefliesRef.current[index] = el;
          }}
          className="absolute w-2 h-2 rounded-full bg-yellow-400 shadow-lg"
          style={{
            boxShadow: "0 0 10px #fbbf24, 0 0 20px #fbbf24, 0 0 30px #fbbf24",
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies