export const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "Its a Magical Themed personal portfolio website to professionally present projects, skills, and achievements, using modern web technologies for a clean design, fast load times, and engaging user experience with particle effects.",
    tech: [
      "NextJS",
      "TypeScript",
      "Three.js",
      "Tailwind",
      "GSAP",
      "ParticlesJS",
    ],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/alan2309/Personal-Portfolio",
    category: "Portfolio",
  },
  {
    id: 2,
    title: "Adwyzors Website",
    description:
      "Designed, developed, and deployed a modern, responsive website for Adwyzors, a business consultancy platform, featuring service showcases, client engagement tools, and optimized performance for seamless user experience.",
    tech: [
      "NextJS",
      "TypeScript",
      "GSAP",
      "MongoDB",
      "Tailwind CSS",
      "EmailJS",
    ],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/alan2309/adwyzors-new",
    category: "3D Experience",
  },
  {
    id: 3,
    title: "Placement Portal",
    description:
      "An AI-powered platform that conducts adaptive coding and personality assessments, then uses a machine learning model to predict your placement readiness based on your performance and traits for my college.",
    tech: ["ReactJS", "Django", "ApexChart", "MongoDB", "Bootstrap"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/alan2309/adaptive-test",
    category: "Web App",
  },

  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Crafted an interactive and visually appealing personal portfolio platform, integrating dynamic project showcases, smooth animations, and responsive design to highlight creative and technical expertise effectively.",
    tech: ["ReactJS", "Bootstrap", "EmailJS", "Framer Motion", "jquery"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/alan2309/portfolio-muskan",
    category: "Tools",
  },
  {
    id: 5,
    title: "CACR-Dashboard",
    description:
      "Built a system to track and manage product distribution under government programs, with data visualization tools to monitor reach and impact.",
    tech: [
      "ReactJS",
      "NodeJS",
      "Material-UI",
      "MongoDB",
      "bootstrap",
      "express",
      "jsonwebtoken",
    ],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/alan2309/CACR-Dash",
    category: "Tools",
  },
  {
    id: 6,
    title: "C-DAC Virtual Lab(olabs)",
    description:
      "Designed and developed an interactive virtual experiment for C-DAC, enabling school students to perform science experiments online through engaging, animation-based simulations, making STEM learning accessible and fun.",
    tech: ["ReactJS", "Framer Motion", "jquery", "bootstrap"],
    image: "/placeholder.svg?height=300&width=400",
    link: "https://cdac.olabs.edu.in/?sub=80&brch=29&sim=276&cnt=1",
    category: "Tools",
  },
];

export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  daysWorked: number;
  startDate: string;
  endDate: string;
  technologies?: string[];
  achievements?: string[];
}

export const workExperience = [
  {
    id: 1,
    title: "R&D Outhouse Project",
    company: "Tata Advanced Systems Limited",
    location: "Mumbai, IN",
    description:
      "Developed and configured EasyIO device controllers to manage controlled environments through the C3 (Central Command & Control) system.",
    daysWorked: 300,
    startDate: "Aug 2022",
    endDate: "May 2023",
  },
  {
    id: 2,
    title: "FullStack Developer",
    company: "Think360.ai",
    location: "Mumbai, IN",
    description:
      "I contributed to the development of a flagship product that automates the creation of web applications, and also worked on preprocessing transaction data for Algo360 to help calculate user credit scores.",
    daysWorked: 90,
    startDate: "Jun 2022",
    endDate: "Aug 2022",
  },
  {
    id: 3,
    title: "FullStack + IOT Developer",
    company: "AICAN Automate LLP",
    location: "Mumbai, IN",
    description:
      "Developed a commercial real-time dashboard for monitoring and controlling air conditioners, and built a Raspberry Pi app to manage experiments by controlling factors like temperature and timing.",
    daysWorked: 90,
    startDate: "Sep 2021",
    endDate: "Nov 2021",
  },
  {
    id: 4,
    title: "FullStack Developer",
    company: "CACR",
    location: "Mumbai, IN",
    description:
      "I developed a website for the NGO Citizens Association for Child Rights (CACR) that visualizes their past and ongoing projects while also showcasing the impact they’ve created through dynamic charts.",
    daysWorked: 90,
    startDate: "Jun 2021",
    endDate: "Sep 2021",
  },
  {
    id: 5,
    title: "FrontEnd Web Developer",
    company: "Centre for Development of Advanced Computing",
    location: "Mumbai, IN",
    description:
      "I created a Virtual Chemistry Lab that allows students to perform their laboratory work through a digitally installed software application, making experiments more accessible and interactive.",
    daysWorked: 300,
    startDate: "Jul 2020",
    endDate: "Apr 2021",
  },
];
