export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "Its a Magical Themed personal portfolio website to professionally present projects, skills, and achievements, using modern web technologies for a clean design, fast load times, and engaging user experience with particle effects.",
    tech: ["NextJS","TypeScript", "Three.js", "Tailwind", "GSAP","ParticlesJS"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/alan2309/Personal-Portfolio",
    category: "Portfolio",
  },
  {
    id: 2,
    title: "Adwyzors Website",
    description:
      "Designed, developed, and deployed a modern, responsive website for Adwyzors, a business consultancy platform, featuring service showcases, client engagement tools, and optimized performance for seamless user experience.",
    tech: ["NextJS","TypeScript","GSAP","MongoDB","Tailwind CSS","EmailJS"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/alan2309/adwyzors-new",
    category: "3D Experience",
  },
  {
    id: 3,
    title: "Placement Portal",
    description: "An AI-powered platform that conducts adaptive coding and personality assessments, then uses a machine learning model to predict your placement readiness based on your performance and traits for my college.",
    tech: ["ReactJS", "Django", "ApexChart", "MongoDB","Bootstrap"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/alan2309/adaptive-test",
    category: "Web App",
  },
  
  {
    id: 4,
    title: "Portfolio Website",
    description: "Crafted an interactive and visually appealing personal portfolio platform, integrating dynamic project showcases, smooth animations, and responsive design to highlight creative and technical expertise effectively.",
    tech: ["ReactJS","Bootstrap","EmailJS","Framer Motion","jquery"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/alan2309/portfolio-muskan",
    category: "Tools",
  },
  {
    id: 5,
    title: "CACR-Dashboard",
    description: "Built a system to track and manage product distribution under government programs, with data visualization tools to monitor reach and impact.",
    tech: ["ReactJS", "NodeJS","Material-UI", "MongoDB","bootstrap","express","jsonwebtoken"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/alan2309/CACR-Dash",
    category: "Tools",
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
