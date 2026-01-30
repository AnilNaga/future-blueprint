import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Careers from "./pages/Careers";
import AboutPage from "./pages/AboutPage";
import SaaSLanding from "./pages/SaaSLanding";
import Dashboard from "./pages/Dashboard";
import Architecture from "./pages/Architecture";
import MEPBIM from "./pages/MEPBIM";
import Structural from "./pages/Structural";
import Academy from "./pages/Academy";
import ArchProjects from "./pages/projects/ArchProjects";
import MEPProjects from "./pages/projects/MEPProjects";
import StructuralProjects from "./pages/projects/StructuralProjects";
import CaseStudies from "./pages/projects/CaseStudies";
import NotFound from "./pages/NotFound";
import GlobalLayout from "./components/GlobalLayout";
import ArchProjectDetail from "./pages/projects/ArchProjectDetail";
import ContactPage from "./pages/ContactPage";
import { ScrollProvider } from "./context/ScrollContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollProvider>
          <GlobalLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/mep-bim" element={<MEPBIM />} />
              <Route path="/structural" element={<Structural />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/projects/architecture" element={<ArchProjects />} />
              <Route path="/projects/architecture/:slug" element={<ArchProjectDetail />} />
              <Route path="/projects/mep" element={<MEPProjects />} />
              <Route path="/projects/structural" element={<StructuralProjects />} />
              <Route path="/projects/case-studies" element={<CaseStudies />} />
              <Route path="/saas" element={<SaaSLanding />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </GlobalLayout>
        </ScrollProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
