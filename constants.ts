import { Experience, Project, Skill } from './types';

export const SITE_CONFIG = {
  name: "Ker",
  title: "Full Stack Engineer",
  email: "kermenglee@gmail.com",
  github: "https://github.com/ker1010",
  linkedin: "https://linkedin.com/in/", // Empty for now
};

export const ABOUT_TEXT = `
I am a passionate Full Stack Developer with a keen eye for UI/UX design.
My journey began with a curiosity for how things work on the web, which led me to master the art of building responsive, accessible, and performant applications.
I specialize in .NET Core, Node.js, and Ionic Framework. 
When I'm not coding, I'm exploring new personal projects or contributing to open-source projects.
`;

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    role: "Intern Full Stack Developer",
    company: "Eduvo Academy XCode",
    period: "2024 - 2025",
    description: "Worked on developing and maintaining web applications using .NET Core and Node.js. With AI skills, contributed to building intelligent features that enhance user experience and streamline operations."
  },
  {
    id: 2,
    role: "Self-taught Web Developer",
    company: "Personal",
    period: "2022 - 2024",
    description: "Started learning web development through online courses and tutorials. Built small projects or challenges to practice HTML, CSS, and JavaScript skills."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 6,
    title: "Discord Sync Bot with Auto-Translate",
    description:
      "A Discord bot that syncs messages between apps, processes embeds, and automatically translates messages using AI models.",
    tech: ["Python", "discord.py", "MySQL", "AI Translation API"],
    github: "#",
    image: "https://picsum.photos/600/400?random=16"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A fully functional headless e-commerce solution with Stripe integration and CMS management.",
    tech: ["ASP.NET", "Bootstrap", "Stripe", "Strapi"],
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 5,
    title: "Chat Management System",
    description:
      "A live chat platform for Chating using ASP.NET Core + AI, featuring real-time chat, user management, and message syncing.",
    tech: ["ASP.NET", "Telegram", "SQL Server"],
    image: "https://picsum.photos/600/400?random=15"
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: ".NET Core / C#", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 90 },
  { name: "Ionic / Angular", level: 80 },
  { name: "React / Next.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "SQL / MySQL", level: 80 },
  { name: "Strapi / CMS", level: 75 },
  { name: "AI / LLM Integration", level: 85 },
  { name: "UI/UX Design", level: 80 },
];