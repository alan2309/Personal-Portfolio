export const projectsData = [
  {
    id: 1,
    title: "Adwyzors Website",
    description:
      "A responsive website for Adwyzors, showcasing business advisory and strategy consulting services with a modern, user-friendly interface.",
    tech: ["NextJS","TypeScript","GSAP"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/alan2309/adwyzors-new",
    category: "3D Experience",
  },
  {
    id: 2,
    title: "Arcane Dashboard",
    description: "A magical data visualization platform with real-time analytics and spell-casting interfaces.",
    tech: ["Next.js", "D3.js", "TypeScript", "Framer Motion"],
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    category: "Web App",
  },
  {
    id: 3,
    title: "Enchanted Portfolio",
    description: "A spellbinding portfolio website with particle effects and interactive magical elements.",
    tech: ["React", "Three.js", "Tailwind", "GSAP"],
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    category: "Portfolio",
  },
  {
    id: 4,
    title: "Wizard's Toolkit",
    description: "A comprehensive suite of magical development tools for modern web wizards and digital alchemists.",
    tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    category: "Tools",
  },
  {
    id: 5,
    title: "Crystal Commerce",
    description: "An e-commerce platform for magical artifacts with immersive 3D product previews.",
    tech: ["Shopify", "React", "Three.js", "Stripe"],
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    category: "E-commerce",
  },
  {
    id: 6,
    title: "Spellbound CMS",
    description: "A content management system designed for magical content creators and digital storytellers.",
    tech: ["Strapi", "React", "GraphQL", "PostgreSQL"],
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
    category: "CMS",
  },
]

export interface WorkExperience {
  id: number
  title: string
  company: string
  location: string
  description: string
  daysWorked: number
  startDate: string
  endDate: string
  technologies?: string[]
  achievements?: string[]
}


export const workExperience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    description:
      "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and architected microservices.",
    daysWorked: 730,
    startDate: "Jan 2022",
    endDate: "Present",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Innovations Inc",
    location: "New York, NY",
    description:
      "Built responsive user interfaces and improved application performance by 40%. Collaborated with design teams to implement pixel-perfect designs.",
    daysWorked: 545,
    startDate: "Mar 2020",
    endDate: "Dec 2021",
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    description:
      "Developed and maintained company website and internal tools. Gained experience in modern web technologies and agile development practices.",
    daysWorked: 365,
    startDate: "Feb 2019",
    endDate: "Feb 2020",
  },
  {
    id: 4,
    title: "Software Engineering Intern",
    company: "MegaTech Corp",
    location: "Seattle, WA",
    description:
      "Contributed to mobile app development and automated testing processes. Participated in code reviews and learned industry best practices.",
    daysWorked: 90,
    startDate: "Jun 2018",
    endDate: "Aug 2018",
  },
  {
    id: 5,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    description:
      "Created custom websites for small businesses and startups. Managed client relationships and delivered projects on time and within budget.",
    daysWorked: 200,
    startDate: "Jan 2018",
    endDate: "May 2018",
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "Digital Innovations Inc",
    location: "New York, NY",
    description:
      "Built responsive user interfaces and improved application performance by 40%. Collaborated with design teams to implement pixel-perfect designs.",
    daysWorked: 545,
    startDate: "Mar 2020",
    endDate: "Dec 2021",
  },
  {
    id: 7,
    title: "Junior Web Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    description:
      "Developed and maintained company website and internal tools. Gained experience in modern web technologies and agile development practices.",
    daysWorked: 365,
    startDate: "Feb 2019",
    endDate: "Feb 2020",
  },
  {
    id: 8,
    title: "Software Engineering Intern",
    company: "MegaTech Corp",
    location: "Seattle, WA",
    description:
      "Contributed to mobile app development and automated testing processes. Participated in code reviews and learned industry best practices.",
    daysWorked: 90,
    startDate: "Jun 2018",
    endDate: "Aug 2018",
  },
  {
    id: 9,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    description:
      "Created custom websites for small businesses and startups. Managed client relationships and delivered projects on time and within budget.",
    daysWorked: 200,
    startDate: "Jan 2018",
    endDate: "May 2018",
  },
]
