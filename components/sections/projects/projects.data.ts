import ClashLensDashboard from "@/app/assets/images/projects/clashlens-dashboard.png";

export const PROJECTS = {
  badge: "Projects",

  title: "Featured work demonstrating practical full-stack development.",

  featured: {
    title: "ClashLens",

    subtitle: "Clash of Clans Analytics Platform",

    description:
      "A full-stack analytics platform that provides clan leaders with live player insights, donation tracking, Town Hall distribution, and war analytics using the official Clash of Clans API.",

    image: ClashLensDashboard,

    features: [
      "Live clan analytics",
      "Player performance insights",
      "Town Hall & league distribution",
      "Current war snapshot",
      "Official Clash of Clans API integration",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],

    github: "https://github.com/mukteswar-git/clashlens",

    live: "https://clashlens.app",
  },

  github: "https://github.com/mukteswar-git",
} as const;
