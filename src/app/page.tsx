import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileBookingBar } from "@/components/layout/mobile-booking-bar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { BranchesSection } from "@/components/sections/branches-section";
import { BusinessBaySection } from "@/components/sections/business-bay-section";
import { MenuShowcaseSection } from "@/components/sections/menu-showcase-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ReservationSection } from "@/components/sections/reservation-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="pb-28 md:pb-0">
        <HeroSection />
        <AboutSection />
        <BranchesSection />
        <BusinessBaySection />
        <MenuShowcaseSection />
        <GallerySection />
        <ReviewsSection />
        <ReservationSection />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}
