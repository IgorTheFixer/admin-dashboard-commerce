import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/providers/ModalProvider'
import { ToastProvider } from '@/providers/ToastProvider'
import { ThemeProvider } from "@/providers/ThemeProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard for E-Commerce Site',
  description: 'This site will act as a CMS for a future e-commerce site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
