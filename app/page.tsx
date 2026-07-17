import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ConversionCTA } from "@/components/ConversionCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PortfolioNotice } from "@/components/PortfolioNotice";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SkipLink } from "@/components/SkipLink";
import { Testimonials } from "@/components/Testimonials";
import { TrustStrip } from "@/components/TrustStrip";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: siteConfig.name,
    headline: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    creator: {
      "@type": "Person",
      name: siteConfig.creator,
    },
    inLanguage: "en",
    genre: "Portfolio case study",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SkipLink />
      <PortfolioNotice />
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
        <Contact />
      </main>

      <Footer />
    </>
  );
}
