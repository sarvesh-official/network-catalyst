import type React from "react"
import type { Metadata } from "next"
import { Inter, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Loader } from "@/components/loader"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
})

export const metadata: Metadata = {
  title: "Network Catalyst Solutions - Enterprise IT Consulting & Technology Solutions",
  description:
    "Network Catalyst Solutions is a technology consulting and solutions company helping organizations gain edge in the market through innovative IT infrastructure, solutions, and management.",
  keywords:
    "IT consulting, technology solutions, network infrastructure, digital transformation, IT services, cloud solutions, cybersecurity",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, ibmPlexSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Loader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'