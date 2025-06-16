import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WalletProvider } from '@/components/providers/WalletProvider'
import { Toaster } from 'react-hot-toast'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MemeLaunch - Fair Launch Meme Tokens',
  description: 'Launch and trade meme tokens with automated bonding curves and fair distribution mechanisms on Solana.',
  keywords: ['solana', 'meme tokens', 'defi', 'bonding curve', 'fair launch'],
  authors: [{ name: 'MemeLaunch Team' }],
  openGraph: {
    title: 'MemeLaunch - Fair Launch Meme Tokens',
    description: 'Launch and trade meme tokens with automated bonding curves and fair distribution mechanisms on Solana.',
    type: 'website',
    url: 'https://memelaunch.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MemeLaunch - Fair Launch Meme Tokens',
    description: 'Launch and trade meme tokens with automated bonding curves and fair distribution mechanisms on Solana.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1f2937',
                color: '#fff',
                border: '1px solid #374151',
              },
            }}
          />
        </WalletProvider>
      </body>
    </html>
  )
}