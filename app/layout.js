import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })
 

export const metadata = {
  title: 'Pixel MP',
  description: 'Discover the most vouched and best shops in the cracking community',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://umaminext.vercel.app/script.js" data-website-id="4c48a5c8-a5ef-4747-9b54-c3a69ee5b746"></script>
      </head>
      <body className={inter.className}>
      <script src="https://cdn.sellix.io/static/js/embed.js" data-nscript="afterInteractive"/>
      <link href="https://cdn.sellix.io/static/css/embed.css" rel="stylesheet"/>
      {children}
      <Analytics />
      <Footer />
      <Toaster />
      </body>
      </html>
  )
}
