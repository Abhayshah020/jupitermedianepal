import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FloatingMessageButton from "@/components/message-us"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jupiter Media Nepal - Your Gateway to Study Abroad",
  description:
    "Expert insights, comprehensive guides, and the latest news to help Nepali students achieve their dreams of studying in prestigious universities worldwide.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/media/icon.png",
        type: "image/png",
      },
    ],
    apple: "/media/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <FloatingMessageButton />
        <Footer />
      </body>
    </html>
  )
}
