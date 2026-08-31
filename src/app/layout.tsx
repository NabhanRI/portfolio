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
  title: "Portfolio | Full Stack Developer",
  description: "Personal portfolio and software engineering showcase",
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${vt323.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-slate-200 text-slate-900 selection:bg-teal-500/20 selection:text-teal-900 dark:bg-[#0a192f] dark:text-slate-200 dark:selection:bg-amber-400/20 dark:selection:text-amber-200 font-sans transition-colors duration-300">
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