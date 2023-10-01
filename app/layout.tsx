import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

export const metadata: Metadata = {
  title: "King's Blog",
  description: 'Created by monkey_K1n9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <Profile />
        {children}
      </body>
    </html>
  )
}
