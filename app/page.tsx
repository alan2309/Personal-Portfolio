"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Work from "./components/Work"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"

export default function Home() {
  const animatingRef = useRef(false)
  const currentIndexRef = useRef(-1)
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef<HTMLElement[]>([])
  const imagesRef = useRef<HTMLDivElement[]>([])
  const outerWrappersRef = useRef<HTMLDivElement[]>([])
  const innerWrappersRef = useRef<HTMLDivElement[]>([])
  const splitHeadingsRef = useRef<SplitText[]>([])
  const pageRevealedRef = useRef(false)
  const clamp = gsap.utils.clamp(0, 4 - 1)

  const gotoSection = useCallback(
    (index: number, direction: number) => {
      index = clamp(index)
      if (currentIndexRef.current === index) return

      animatingRef.current = true
      const fromTop = direction === -1
      const dFactor = fromTop ? -1 : 1
      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => {
          animatingRef.current = false
        },
      })

      if (currentIndexRef.current >= 0) {
        gsap.set(sectionsRef.current[currentIndexRef.current], { zIndex: 0 })
        tl.to(imagesRef.current[currentIndexRef.current], {
          yPercent: -15 * dFactor,
        }).set(sectionsRef.current[currentIndexRef.current], {
          autoAlpha: 0,
        })
      }

      gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 })
      tl.fromTo(
        [outerWrappersRef.current[index], innerWrappersRef.current[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0,
      ).fromTo(imagesRef.current[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)

      if (splitHeadingsRef.current[index] && splitHeadingsRef.current[index].chars) {
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
          0.2,
        )
      }

      currentIndexRef.current = index
      setActiveSection(index)
    },
    [clamp],
  )

  useEffect(() => {
    gsap.registerPlugin(SplitText)

    const clamp = gsap.utils.clamp(0, 4 - 1)

    const gotoSection = (index: number, direction: number) => {
      index = clamp(index)
      if (currentIndexRef.current === index) return

      animatingRef.current = true
      const fromTop = direction === -1
      const dFactor = fromTop ? -1 : 1
      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => {
          animatingRef.current = false
        },
      })

      if (currentIndexRef.current >= 0) {
        gsap.set(sectionsRef.current[currentIndexRef.current], { zIndex: 0 })
        tl.to(imagesRef.current[currentIndexRef.current], {
          yPercent: -15 * dFactor,
        }).set(sectionsRef.current[currentIndexRef.current], {
          autoAlpha: 0,
        })
      }

      gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 })
      tl.fromTo(
        [outerWrappersRef.current[index], innerWrappersRef.current[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0,
      ).fromTo(imagesRef.current[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)

      if (splitHeadingsRef.current[index] && splitHeadingsRef.current[index].chars) {
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
          0.2,
        )
      }

      currentIndexRef.current = index
      setActiveSection(index)
    }

    const initializePage = () => {
      if (pageRevealedRef.current) return

      pageRevealedRef.current = true
      gotoSection(0, 1)
    }

    requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("section"))
      const images = Array.from(document.querySelectorAll<HTMLDivElement>(".bg"))
      const headings = gsap.utils.toArray<HTMLElement>(".section-heading")
      const outerWrappers = gsap.utils.toArray<HTMLDivElement>(".outer")
      const innerWrappers = gsap.utils.toArray<HTMLDivElement>(".inner")

      sectionsRef.current = sections
      imagesRef.current = images
      outerWrappersRef.current = outerWrappers
      innerWrappersRef.current = innerWrappers

      splitHeadingsRef.current = headings.map(
        (heading) =>
          new SplitText(heading, {
            type: "chars, words, lines",
            linesClass: "clip-text",
          }),
      )

      gsap.set(outerWrappers, { yPercent: 100 })
      gsap.set(innerWrappers, { yPercent: -100 })

      function handleWheel(e: WheelEvent) {
        if (animatingRef.current || document.body.classList.contains("disable-snap-scroll") || !pageRevealedRef.current)
          return
        if (e.deltaY > 0) {
          gotoSection(currentIndexRef.current + 1, 1)
        } else {
          gotoSection(currentIndexRef.current - 1, -1)
        }
      }

      let touchStartY = 0
      function handleTouchStart(e: TouchEvent) {
        if (document.body.classList.contains("disable-snap-scroll") || !pageRevealedRef.current) return
        touchStartY = e.changedTouches[0].pageY
      }
      function handleTouchEnd(e: TouchEvent) {
        if (animatingRef.current || document.body.classList.contains("disable-snap-scroll") || !pageRevealedRef.current)
          return
        const dy = e.changedTouches[0].pageY - touchStartY
        if (dy > 10) gotoSection(currentIndexRef.current - 1, -1)
        if (dy < -10) gotoSection(currentIndexRef.current + 1, 1)
      }

      document.addEventListener("wheel", handleWheel)
      document.addEventListener("touchstart", handleTouchStart)
      document.addEventListener("touchend", handleTouchEnd)

      initializePage()

      return () => {
        document.removeEventListener("wheel", handleWheel)
        document.removeEventListener("touchstart", handleTouchStart)
        document.removeEventListener("touchend", handleTouchEnd)
      }
    })
  }, [])

  return (
    <>
      <header>
        <Navbar onNavigate={(index) => gotoSection(index, 1)} activeSection={activeSection} />
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
  )
}
