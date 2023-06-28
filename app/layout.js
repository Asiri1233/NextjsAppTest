import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
 

export const metadata = {
  title: 'Pixel Mp',
  description: 'Marketplace for richz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pixelanalytics.up.railway.app/script.js" data-website-id="653cb007-8bb9-4828-a1b2-53af9e008b7a"></script>
      </head>
      <body className={inter.className}>
      <script src="https://cdn.sellix.io/static/js/embed.js" data-nscript="afterInteractive"/>
      <link href="https://cdn.sellix.io/static/css/custom-embed-styles.css" id="sellix-css" rel="stylesheet"/>
      {children}
      <Footer />
      <Toaster />
      </body>
      </html>
  )
}
