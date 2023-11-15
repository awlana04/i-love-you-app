import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Favicon from './favicon.ico';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'I Love You',
  description: 'Dedicatória muito simples para uma pessoa muito especial que eu amo demasiadamente muito',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
