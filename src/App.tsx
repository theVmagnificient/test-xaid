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
import NotFound from "./pages/NotFound";
import { routeImporters, RoutePage } from "./routes";

const queryClient = new QueryClient();

// All non-homepage routes are code-split (see src/routes.tsx). To add a page:
// register its importer in routes.tsx — the Route below is generated from the map.
// ADD ALL CUSTOM ROUTES IN routes.tsx; "*" stays the catch-all.
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
            {Object.keys(routeImporters).map((path) => (
              <Route key={path} path={path} element={<RoutePage path={path} />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </PageTransitionWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
