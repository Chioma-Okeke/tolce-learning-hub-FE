import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import BackToTop from "@/components/shared/back-to-top";


const inter = Inter({
  weight: '400',
  variable: '--font-inter',
  style: 'normal',
  subsets: ['latin'],
})

const generalSans = localFont({
  src: [
    {
      path: '../fonts/general-sans/GeneralSans-Variable.woff2',
      style: 'normal',
      weight: '200 700',
    },
  ],
  variable: '--font-general-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tolce-learning-hub.vercel.app/'),
  title: {
    default: 'Tolce Learning Hub',
    template: 'Tolce Learning Hub | %s',
  },
  authors: [
    {
      name: "Tolce Learning Hub",
      url: "https://tolce-learning-hub.vercel.app/"
    }
  ],
  description:
    'Tolce Learning Hub empowers learners with high-quality digital education, expert-led tutorials, and skill-building resources tailored for African creators and professionals.',
  keywords: [
    'Tolce Learning Hub',
    'Online learning platform Nigeria',
    'African digital skills education',
    'Tech courses for beginners',
    'E-learning for creators and professionals',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://tolce-learning-hub.vercel.app/',
    siteName: 'Tolce Learning Hub',
    title: 'Tolce Learning Hub',
    description:
      'Tolce Learning Hub empowers learners with high-quality digital education, expert-led tutorials, and skill-building resources tailored for African creators and professionals.',
    images: [
      {
        url: 'https://res.cloudinary.com/djrp3aaq9/image/upload/v1750851276/tolce_learning_hub_logo_lglxq1.png',
        width: 1200,
        height: 630,
        alt: 'Tolce Learning Hub Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tolce Learning Hub',
    description:
      'Tolce Learning Hub empowers learners with high-quality digital education, expert-led tutorials, and skill-building resources tailored for African creators and professionals.',
    creator: '@tolcelearning',
    images: [
      'https://res.cloudinary.com/djrp3aaq9/image/upload/v1750851276/tolce_learning_hub_logo_lglxq1.png',
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  applicationName: 'Tolce Learning Hub',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'h-svh antialiased',
          generalSans.variable,
          inter.variable
        )}
      >
        <Toaster richColors expand={true} position="top-right" />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
