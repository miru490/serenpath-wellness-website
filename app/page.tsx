import { About } from "@/components/About";
import { BrandPalette } from "@/components/BrandPalette";
import { Contact } from "@/components/Contact";
import { ConversionCTA } from "@/components/ConversionCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SkipLink } from "@/components/SkipLink";
import { Testimonials } from "@/components/Testimonials";
import { TrustStrip } from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <ConversionCTA />
        <Process />
        <Testimonials />
        <FAQ />
        <BrandPalette />
        <Contact />
      </main>

      <Footer />
    </>
  );
}