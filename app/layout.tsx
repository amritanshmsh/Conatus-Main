import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Preloader from "@/components/preloader";
import ElasticCursor from "@/components/ui/ElasticCursor";
import { siteMetadata } from './metadata'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.siteUrl),
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: '/',
    siteName: siteMetadata.title,
    images: [{
      url: '/thumbnail.jpeg',
      width: 1200,
      height: 630,
      alt: siteMetadata.title,
    }],
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'og:image': '/thumbnail.jpeg',
    'og:title': siteMetadata.title,
    'og:description': siteMetadata.description,
    'og:url': siteMetadata.siteUrl,
    // WhatsApp specific
    'theme-color': '#000000',
    'format-detection': 'telephone=no',
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
    'apple-touch-fullscreen': 'yes',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ['/thumbnail.jpeg'],
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'your-google-verification-code', // Optional
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          {children}
          <Preloader>
            <ElasticCursor/>
          </Preloader>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
