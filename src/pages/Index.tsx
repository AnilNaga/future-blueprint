import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import RevitWorkflows from '@/components/RevitWorkflows';
import BIMConsultancy from '@/components/BIMConsultancy';
import Testimonials from '@/components/Testimonials';
import Training from '@/components/Training';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent text-foreground relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <RevitWorkflows />
        <BIMConsultancy />
        <Training />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
