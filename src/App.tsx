import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Navigation from "./components/Navigation";
import { PageTransitionWrapper } from "./components/PageTransitionWrapper";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Pricing from "./pages/Pricing";
import AiVsTeleradiology from "./pages/AiVsTeleradiology";
import ForOutpatientCenters from "./pages/ForOutpatientCenters";
import ForTeleradiologyCompanies from "./pages/ForTeleradiologyCompanies";
import AiVsLocumRadiologist from "./pages/AiVsLocumRadiologist";
import ForRadiologyGroups from "./pages/ForRadiologyGroups";
import ForSmallHospitals from "./pages/ForSmallHospitals";
import Compliance from "./pages/Compliance";
import Accuracy from "./pages/Accuracy";
import HeadCtReport from "./pages/HeadCtReport";
import ChestCtReport from "./pages/ChestCtReport";
import AbdomenCtReport from "./pages/AbdomenCtReport";
import Integrations from "./pages/Integrations";
import Blog from "./pages/Blog";
import HowAccurateIsAiRadiology from "./pages/blog/HowAccurateIsAiRadiology";
import RadiologistShortage2026 from "./pages/blog/RadiologistShortage2026";
import CtReportTurnaroundTime from "./pages/blog/CtReportTurnaroundTime";
import AiTeleradiologyVsTraditional from "./pages/blog/AiTeleradiologyVsTraditional";
import HipaaCompliantAiRadiology from "./pages/blog/HipaaCompliantAiRadiology";
import AiRadiologyBuyersGuide from "./pages/blog/AiRadiologyBuyersGuide";
import CtRadiologyCoverageCosts from "./pages/blog/CtRadiologyCoverageCosts";
import HowToSwitchToAiRadiology from "./pages/blog/HowToSwitchToAiRadiology";
import AfterHoursRadiologyCoverage from "./pages/blog/AfterHoursRadiologyCoverage";
import HowAiCtReportingWorks from "./pages/HowAiCtReportingWorks";
import AiRadiologyGlossary from "./pages/blog/AiRadiologyGlossary";
import SmallHospitalRadiology from "./pages/blog/SmallHospitalRadiology";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <BackToTop />
          <Navigation />
          <PageTransitionWrapper>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/ai-vs-teleradiology" element={<AiVsTeleradiology />} />
            <Route path="/for-outpatient-imaging-centers" element={<ForOutpatientCenters />} />
            <Route path="/for-teleradiology-companies" element={<ForTeleradiologyCompanies />} />
            <Route path="/ai-vs-locum-radiologist" element={<AiVsLocumRadiologist />} />
            <Route path="/for-radiology-groups" element={<ForRadiologyGroups />} />
            <Route path="/for-small-hospitals" element={<ForSmallHospitals />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/accuracy" element={<Accuracy />} />
            <Route path="/head-ct-ai-report" element={<HeadCtReport />} />
            <Route path="/chest-ct-ai-report" element={<ChestCtReport />} />
            <Route path="/abdomen-ct-ai-report" element={<AbdomenCtReport />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/how-accurate-is-ai-radiology-reporting" element={<HowAccurateIsAiRadiology />} />
            <Route path="/blog/radiologist-shortage-2026-ai-ct-reporting" element={<RadiologistShortage2026 />} />
            <Route path="/blog/ct-report-turnaround-time-benchmarks-2026" element={<CtReportTurnaroundTime />} />
            <Route path="/blog/ai-teleradiology-vs-traditional-teleradiology-2026" element={<AiTeleradiologyVsTraditional />} />
            <Route path="/blog/is-ai-radiology-reporting-hipaa-compliant" element={<HipaaCompliantAiRadiology />} />
            <Route path="/blog/ai-radiology-reporting-buyers-guide-2026" element={<AiRadiologyBuyersGuide />} />
            <Route path="/blog/ct-radiology-coverage-costs-2026" element={<CtRadiologyCoverageCosts />} />
            <Route path="/blog/how-to-switch-from-teleradiology-to-ai-ct-reporting" element={<HowToSwitchToAiRadiology />} />
            <Route path="/blog/after-hours-radiology-coverage-options" element={<AfterHoursRadiologyCoverage />} />
            <Route path="/how-ai-ct-reporting-works" element={<HowAiCtReportingWorks />} />
            <Route path="/blog/ai-radiology-terminology-glossary" element={<AiRadiologyGlossary />} />
            <Route path="/blog/ai-radiology-for-small-hospitals-2026" element={<SmallHospitalRadiology />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </PageTransitionWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
