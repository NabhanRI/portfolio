import type { Metadata } from "next";
import { Inter, JetBrains_Mono, VT323 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN.com"), // set after you deploy
  title: {
    default: "nabhanri — Full Stack Developer",
    template: "%s | Muhammad Nabhan Rifa'i",
  },
  description:
    "Portfolio of Muhammad Nabhan Rifa'i (NabhanRI) — full stack JavaScript developer (React, Node.js, PostgreSQL) based in Indonesia. Projects, experience, and resume.",
  keywords: [
    "Muhammad Nabhan Rifa'i",
    "NabhanRI",
    "Nabhan Rifa'i",
    "Full Stack Developer",
  ],
  authors: [{ name: "Muhammad Nabhan Rifa'i", url: "https://YOUR-DOMAIN.com" }],
  creator: "Muhammad Nabhan Rifa'i",
  icons: {
    icon: "/asset/Frieren.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://YOUR-DOMAIN.com",
    siteName: "Muhammad Nabhan Rifa'i",
    title: "Muhammad Nabhan Rifa'i | Full Stack Developer",
    description:
      "Full stack developer portfolio — React, Node.js, PostgreSQL. Indonesia.",
    images: [{ url: "/asset/Frieren.jpg", width: 1200, height: 630, alt: "Muhammad Nabhan Rifa'i" }],
  },
  alternates: {
    canonical: "https://YOUR-DOMAIN.com",
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
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} ${vt323.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-slate-200 bg-pixel-grid text-slate-900 selection:bg-teal-500/20 selection:text-teal-900 dark:bg-[#0a192f] dark:text-slate-200 dark:selection:bg-amber-400/20 dark:selection:text-amber-200 font-sans transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}