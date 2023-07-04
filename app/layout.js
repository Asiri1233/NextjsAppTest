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
      <script async src="https://pixelanalytics.up.railway.app/script.js" data-website-id="564b7ec7-c789-4352-acea-e63255f2facf"></script>
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
