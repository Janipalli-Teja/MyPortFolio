
import { Project, RoadmapItem, UserProfile } from './types';

export const PROFILE: UserProfile = {
  name: "Janipalli Teja",
  role: "Full Stack Developer",
  bio: "Full-stack developer specializing in the MERN stack and TypeScript. Currently pursuing B.Tech in IT at MVGR College of Engineering. I build scalable web applications with a focus on performance and user security.",
  avatar: "assets/me-anime.jpeg",
  socials: {
    twitter: "https://x.com/Janipalli_teja",
    github: "https://github.com/Janipalli-Teja",
    linkedin: "https://www.linkedin.com/in/teja-janipalli/",
    email: "mailto:tejajanipalli29@gmail.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "p3",
    title: "Coach App",
    subtitle: "Sports Academy Management System",
    role: "Freelance Mobile Developer",
    category: "commercial",
    description: "A comprehensive mobile solution for sports academies to manage student lifecycles, real-time attendance, and complex fee structures across multiple branches.",
    challenge: "Academy owners were reliant on manual spreadsheets and paper registers, which made tracking attendance across different sessions (Morning/Evening) and managing multi-branch revenue extremely difficult.",
    result: "Automated the entire reporting and management workflow. Developed a one-tap Excel (XLSX) export system and real-time dashboard analytics, reducing administrative paper-work by nearly 70%.",
    functionalities: [
      "Real-time Smart Analytics Dashboard",
      "Multi-branch & Session-wise management",
      "Automated Excel (XLSX) report exports",
      "Digital Student Directory with Cloudinary",
      "Bulk Attendance & Fee tracking"
    ],
    image: "https://images.unsplash.com/photo-1526232759583-d23eddfca1b8?auto=format&fit=crop&q=80&w=1200",
    tags: ["React Native", "Expo", "Firebase", "Cloudinary", "TypeScript"]
  },
  {
    id: "p0",
    title: "RV Nature Tents Resort",
    subtitle: "Enterprise Resort Management System",
    role: "Freelance Full Stack Developer",
    category: "commercial",
    description: "A complete business automation suite for a premium resort, managing everything from guest bookings to employee payroll.",
    challenge: "The resort relied on manual entries for bookings and salary, leading to overbooking errors and delayed employee payments during peak seasons.",
    result: "Developed a real-time booking engine and automated HR modules, resulting in zero overbooking incidents and 100% on-time salary automation.",
    functionalities: [
      "Real-time tent booking engine",
      "Dynamic availability & pricing search",
      "Employee attendance & salary automation",
      "Supervisor dashboard for walk-ins"
    ],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://rvrestorts.in",
    tags: ["MERN Stack", "TypeScript", "JWT Auth", "Tailwind"]
  },
  {
    id: "p1",
    title: "Food Delivery App",
    subtitle: "MERN Stack Ordering System",
    role: "Full Stack Developer",
    category: "personal",
    description: "A comprehensive food delivery solution featuring real-time partner order flows and integrated payment systems.",
    challenge: "Managing high latency in the partner order flow which delayed real-time updates for customers and restaurants.",
    result: "Optimized the backend architecture and implemented efficient state management, reducing partner order flow latency by 18%.",
    functionalities: [
      "Real-time partner order tracking",
      "Secure JWT Authentication",
      "Dynamic Cart & Payment integration",
      "Live delivery status updates"
    ],
    image: "https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/Janipalli-Teja",
    tags: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    id: "p2",
    title: "ChallanEase",
    subtitle: "Automated Traffic Management",
    role: "Full Stack Developer",
    category: "personal",
    description: "A PWA-enabled platform designed to automate the generation and tracking of traffic challans using license-plate detection.",
    challenge: "Traffic departments were bogged down by manual data entry for challan generation, leading to human error and slow processing.",
    result: "Automated the generation process, reducing manual work by 90% and achieving 85%+ accuracy in license-plate detection.",
    functionalities: [
      "PWA for offline capabilities",
      "License-plate detection integration",
      "Automated PDF challan generation",
      "Admin dashboard for traffic monitoring"
    ],
    image: "https://images.unsplash.com/photo-1506146632482-96351a2d8ee2?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/Janipalli-Teja",
    tags: ["Node.js", "Express", "MongoDB", "PWA"]
  }
];

export const ROADMAP: RoadmapItem[] = [
  {
    id: "r1",
    type: "job",
    title: "Freelance Full-Stack Developer",
    organization: "RV Nature Tents Resort",
    period: "2024 - Present",
    description: "Building production-grade web solutions for real-world business automation."
  },
  {
    id: "r2",
    type: "education",
    title: "B.Tech in Information Technology",
    organization: "MVGR College of Engineering",
    period: "2022 - 2026",
    description: "Current CGPA: 7.3/10. Focus on Software Engineering and Systems Architecture."
  },
  {
    id: "r3",
    type: "education",
    title: "Board of Intermediate Education",
    organization: "AP Model Junior College",
    period: "2020 - 2022",
    description: "Science stream with focus on problem solving and mathematics."
  }
];
