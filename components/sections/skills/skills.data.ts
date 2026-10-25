export const SKILLS = {
  badge: "Skills",

  title: "Technologies I use to build modern web applications.",

  categories: [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "Zod"],
    },
    {
      title: "Database & ORM",
      skills: ["PostgreSQL", "Prisma ORM"],
    },
    {
      title: "Testing",
      skills: ["Jest", "Supertest"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "Vercel",
        "Linux",
        "VS Code",
        "Figma",
      ],
    },
  ],
} as const;
