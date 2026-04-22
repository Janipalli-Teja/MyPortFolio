
import { Project, RoadmapItem, UserProfile } from './types';

export const PROFILE: UserProfile = {
  name: "Janipalli Teja",
  role: "Software Developer",
  bio: "Software Developer with hands-on experience building full-stack applications using JavaScript, Node.js, and MongoDB. Strong in designing REST APIs, backend systems, and scalable workflows. Experienced in performance optimization, asynchronous processing, and deploying applications on AWS.",
  avatar: "https://github.com/Janipalli-Teja/pongal/blob/main/me-anime.jpeg?raw=true",
  socials: {
    twitter: "https://x.com/Janipalli_teja",
    github: "https://github.com/Janipalli-Teja",
    linkedin: "https://www.linkedin.com/in/teja-janipalli/",
    email: "mailto:tejajanipalli29@gmail.com"
  },
  resumeUrl: "https://drive.google.com/file/d/1B6Pl-uGtlMG0f8sgEic-kLV6PI-UE-_7/view?usp=drive_link"
};

export const PROJECTS: Project[] = [
  {
    id: "p0",
    title: "RV Nature Tents Resort",
    subtitle: "Enterprise Resort Management System",
    role: "Freelance Full Stack Developer",
    category: "commercial",
    description: "A full-stack booking platform serving 200+ active users with real-time availability and scheduling. Automated payroll for 15 staff and implemented role-based dashboards for managing reservations and daily operations.",
    challenge: "The resort relied on manual entries for bookings and salary, leading to overbooking errors and delayed employee payments during peak seasons.",
    result: "Developed REST APIs and optimized database queries to improve response time. Automated attendance and payroll for 15 staff, reducing manual effort and operational errors significantly.",
    functionalities: [
      "Real-time booking engine (200+ active users)",
      "REST APIs with optimized DB queries",
      "Automated payroll & attendance for 15 staff",
      "Role-based dashboards for operations",
      "Dynamic availability & scheduling"
    ],
    image: "https://github.com/Janipalli-Teja/pongal/blob/main/WhatsApp%20Image%202025-12-10%20at%2012.19.51_14d3f1e6.jpg?raw=true",
    liveUrl: "https://rvresorts.in",
    tags: ["MERN Stack", "TypeScript", "JWT Auth", "Tailwind"]
  },
  {
    id: "p3",
    title: "Coach App",
    subtitle: "Sports Academy Management System",
    role: "Freelance Mobile Developer",
    category: "commercial",
    description: "A React Native application managing attendance, personal, and performance data for 100+ students across a sports academy, with fee management, analytics, and cloud-integrated media handling.",
    challenge: "Academy owners were reliant on manual spreadsheets and paper registers, making it hard to track attendance across sessions (Morning/Evening) and manage multi-branch revenue.",
    result: "Automated the entire reporting workflow. Optimized bulk data operations for faster processing and integrated cloud storage (Cloudinary) for secure media handling.",
    functionalities: [
      "Attendance tracking & fee management",
      "Student analytics & performance data",
      "Optimized bulk data operations",
      "Cloud storage integration (Cloudinary)",
      "Automated Excel (XLSX) report exports"
    ],
    image: "https://github.com/Janipalli-Teja/pongal/blob/main/WhatsApp%20Image%202026-01-05%20at%2012.49.29.jpeg?raw=true",
    tags: ["React Native", "Expo", "Firebase", "Cloudinary", "TypeScript"],
    githubUrl: "https://github.com/Janipalli-Teja/Coach-App-Demo"
  },
  {
    id: "p4",
    title: "IPLMatchHub",
    subtitle: "AI-Powered Cricket Blogging Platform",
    role: "Full Stack Developer",
    category: "personal",
    description: "A full-stack platform built with Next.js and Node.js, integrating AI APIs for automated content generation. Features asynchronous pipelines using cron jobs and background workers for scalable, high-performance content processing.",
    challenge: "Generating timely, quality cricket content at scale required automating editorial workflows end-to-end — from data ingestion to publishing — without manual intervention.",
    result: "Built asynchronous content pipelines with cron jobs and background workers. Boosted performance with Redis caching and database indexing techniques.",
    functionalities: [
      "AI-automated blog content generation",
      "Cron jobs & background worker pipelines",
      "Redis caching & database indexing",
      "Match data ingestion and processing",
      "SEO-optimized content publishing"
    ],
    image: "https://github.com/Janipalli-Teja/pongal/blob/main/ChatGPT%20Image%20Apr%2023,%202026,%2012_16_25%20AM.png?raw=true",
    githubUrl: "https://github.com/Janipalli-Teja/IPLMatchHub",
    tags: ["Next.js", "Node.js", "MongoDB", "Redis"]
  },
  {
    id: "p5",
    title: "AI Assistant",
    subtitle: "Autonomous Multi-Step ReAct Agent",
    role: "Full Stack Developer",
    category: "personal",
    description: "An autonomous AI agent using the ReAct framework for multi-step task execution with dynamic tool selection. Features a real-time SSE streaming dashboard and dual-layer memory for context and state management.",
    challenge: "Building an agent that could reliably recover from errors mid-task required a genuine self-correcting feedback loop — not just a simple retry.",
    result: "Designed a Goal → Think → Act → Observe loop with error-aware retry logic and dual-layer memory, delivering full context-awareness across long multi-step sessions.",
    functionalities: [
      "ReAct framework for multi-step reasoning",
      "Goal → Think → Act → Observe loop",
      "Self-correcting error-aware retry logic",
      "Real-time SSE streaming dashboard",
      "Dual-layer memory (context + state)"
    ],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop",
    liveUrl: "https://github.com/Janipalli-Teja/AI-Assistant",
    githubUrl: "https://github.com/Janipalli-Teja/AI-Assistant",
    tags: ["Node.js", "React", "TypeScript", "SSE", "Gemini API"]
  },
  {
    id: "p1",
    title: "Food Delivery App",
    subtitle: "MERN Stack Ordering System",
    role: "Full Stack Developer",
    category: "personal",
    description: "A MERN-based application with authentication and end-to-end order management. Designed REST APIs for users, orders, and transactions with a scalable backend architecture and admin dashboards.",
    challenge: "Managing high latency in the partner order flow which delayed real-time updates for customers and restaurants.",
    result: "Designed scalable REST APIs and admin dashboards for menu and order management. Optimized backend architecture to reduce order flow latency.",
    functionalities: [
      "JWT Authentication & authorization",
      "REST APIs for users, orders & transactions",
      "Admin dashboards for menu & order management",
      "Scalable backend architecture",
      "End-to-end order flow"
    ],
    image: "https://github.com/Janipalli-Teja/Foody/blob/main/client/public/agent.jpg?raw=true",
    githubUrl: "https://github.com/Janipalli-Teja/Foody",
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
    image: "https://i.pinimg.com/736x/1a/22/a4/1a22a498e352cbb1b989ec722e33862a.jpg",
    githubUrl: "https://github.com/Janipalli-Teja/ChallanEase",
    tags: ["Node.js", "Express", "MongoDB", "PWA"]
  }
];

export const ROADMAP: RoadmapItem[] = [
  {
    id: "r1",
    type: "job",
    title: "Freelance Full-Stack Developer",
    organization: "RV Nature Tents Resort & Coach App",
    period: "2025 - Present",
    description: "Built a full-stack booking platform for 200+ active users and a React Native sports academy app for 100+ students. Automated payroll, attendance, and implemented role-based management dashboards."
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
