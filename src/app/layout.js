import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kimble Shop',
  description: 'Welcome to Kimble Shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: '#1b1734', color: 'white' }}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
