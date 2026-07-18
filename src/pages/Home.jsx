import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AboutSection from '../components/home/AboutSection';
import SpecialitiesSection from '../components/home/SpecialitiesSection';
import DoctorsSection from '../components/home/DoctorsSection';
import HealthPackages from '../components/home/HealthPackages';
import PatientJourney from '../components/home/PatientJourney';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GallerySection from '../components/home/GallerySection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <AboutSection />
      <SpecialitiesSection />
      <DoctorsSection />
      <HealthPackages />
      <PatientJourney />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
