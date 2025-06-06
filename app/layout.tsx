import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Winson Baring - Full-Stack Software Developer",
  description:
    "Portfolio of Winson Baring, a passionate Full-Stack Software Developer specializing in Next.js, NestJS, AI integration, and modern web technologies.",
  keywords:
    "Winson Baring, Software Developer, Full-Stack Developer, Next.js, NestJS, React, AI, Machine Learning, Web Development, Cebu",
  authors: [{ name: "Winson Baring" }],
  openGraph: {
    title: "Winson Baring - Full-Stack Software Developer",
    description:
      "Portfolio of Winson Baring, a passionate Full-Stack Software Developer specializing in Next.js, NestJS, AI integration, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >  {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
