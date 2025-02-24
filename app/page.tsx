import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import { Metadata } from 'next'
import { siteMetadata } from './metadata'
import Aboutus from "@/components/Aboutus";
import FaqSection from "@/components/FAQ";
import Socials from "@/components/Social";
import Connect from "@/components/Connect";
import ERPBanner from "@/components/Banner";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: siteMetadata.title,
  openGraph: {
    title: siteMetadata.title,
    // ... other OpenGraph properties
  },
  // ... other metadata
}

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Navbar />   
        <Hero />
        <Aboutus />
        <Services />
        {/* <Clients /> */}
  
        <ERPBanner />
        <FaqSection />
        <Socials />
        <Connect />
      </div>
    </main>
  );
}