import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = "https://mukteswar.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mukteswar Tripathy | Full-Stack Developer",
    template: "%s | Mukteswar Tripathy",
  },

  description:
    "Portfolio of Mukteswar Tripathy, a Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL. Explore projects, experience, and technical skills.",

  keywords: [
    "Mukteswar Tripathy",
    "Full Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Mukteswar Tripathy",
    },
  ],

  creator: "Mukteswar Tripathy",

  openGraph: {
    title: "Mukteswar Tripathy | Full-Stack Developer",
    description:
      "Explore my portfolio showcasing full-stack web development projects built with React, Next.js, TypeScript, Node.js, and PostgreSQL.",
    url: siteUrl,
    siteName: "Mukteswar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mukteswar Tripathy Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mukteswar Tripathy | Full-Stack Developer",
    description:
      "Portfolio showcasing modern full-stack web applications and projects.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
