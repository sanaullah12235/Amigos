import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedItems } from "@/components/FeaturedItems";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PopularDeals } from "@/components/PopularDeals";
import { Testimonials } from "@/components/Testimonials";
import { AppDownload } from "@/components/AppDownload";
import { InstaGallery } from "@/components/InstaGallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cream">
      <Navbar />
      
      {/* Dark Hero */}
      <div className="dark-section">
        <Hero />
      </div>

      {/* Light Featured */}
      <div className="light-section relative z-10 pt-12">
        <div className="max-w-[1400px] mx-auto bg-white rounded-[3rem] shadow-2xl border border-gold/10 overflow-hidden">
          <FeaturedItems />
        </div>
      </div>

      {/* Why Choose Us - Dark Contrast */}
      <div className="dark-section mt-24">
        <WhyChooseUs />
      </div>

      {/* Popular Deals - Light */}
      <div className="light-section">
        <PopularDeals />
      </div>

      {/* Testimonials - Dark */}
      <div className="dark-section">
        <Testimonials />
      </div>

      {/* App Download - High Impact Gold/Light */}
      <div className="light-section">
        <AppDownload />
      </div>

      {/* Social Gallery - Dark */}
      <div className="dark-section">
        <InstaGallery />
      </div>

      <Footer />
    </main>
  );
}
