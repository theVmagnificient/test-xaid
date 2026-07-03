import { lazy, Suspense, type ComponentType } from 'react';

// Route-level code splitting that stays compatible with react-snap prerender +
// hydrateRoot. Plain React.lazy suspends on first render even when the chunk
// is already downloaded, which breaks hydration of snapshot HTML (no SSR
// Suspense markers exist). So: main.tsx awaits preloadRoute(pathname) BEFORE
// hydrating; the resolved component lands in `resolved` and renders
// synchronously — hydration sees exactly the prerendered tree. Client-side
// navigations (cache miss) fall back to lazy + Suspense, which is fine after
// hydration.
//
// The homepage (Index) stays in the main bundle on purpose: it is the entry
// page for most visits and must not pay an extra chunk round-trip.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PageModule = { default: ComponentType<any> };

export const routeImporters: Record<string, () => Promise<PageModule>> = {
  '/privacy-policy': () => import('./pages/PrivacyPolicy'),
  '/pricing': () => import('./pages/Pricing'),
  '/ai-vs-teleradiology': () => import('./pages/AiVsTeleradiology'),
  '/for-outpatient-imaging-centers': () => import('./pages/ForOutpatientCenters'),
  '/for-teleradiology-companies': () => import('./pages/ForTeleradiologyCompanies'),
  '/ai-vs-locum-radiologist': () => import('./pages/AiVsLocumRadiologist'),
  '/for-radiology-groups': () => import('./pages/ForRadiologyGroups'),
  '/for-small-hospitals': () => import('./pages/ForSmallHospitals'),
  '/compliance': () => import('./pages/Compliance'),
  '/accuracy': () => import('./pages/Accuracy'),
  '/head-ct-ai-report': () => import('./pages/HeadCtReport'),
  '/chest-ct-ai-report': () => import('./pages/ChestCtReport'),
  '/abdomen-ct-ai-report': () => import('./pages/AbdomenCtReport'),
  '/integrations': () => import('./pages/Integrations'),
  '/how-ai-ct-reporting-works': () => import('./pages/HowAiCtReportingWorks'),
  '/blog': () => import('./pages/Blog'),
  '/blog/how-accurate-is-ai-radiology-reporting': () => import('./pages/blog/HowAccurateIsAiRadiology'),
  '/blog/radiologist-shortage-2026-ai-ct-reporting': () => import('./pages/blog/RadiologistShortage2026'),
  '/blog/ct-report-turnaround-time-benchmarks-2026': () => import('./pages/blog/CtReportTurnaroundTime'),
  '/blog/ai-teleradiology-vs-traditional-teleradiology-2026': () => import('./pages/blog/AiTeleradiologyVsTraditional'),
  '/blog/is-ai-radiology-reporting-hipaa-compliant': () => import('./pages/blog/HipaaCompliantAiRadiology'),
  '/blog/ai-radiology-reporting-buyers-guide-2026': () => import('./pages/blog/AiRadiologyBuyersGuide'),
  '/blog/ct-radiology-coverage-costs-2026': () => import('./pages/blog/CtRadiologyCoverageCosts'),
  '/blog/how-to-switch-from-teleradiology-to-ai-ct-reporting': () => import('./pages/blog/HowToSwitchToAiRadiology'),
  '/blog/after-hours-radiology-coverage-options': () => import('./pages/blog/AfterHoursRadiologyCoverage'),
  '/blog/ai-radiology-terminology-glossary': () => import('./pages/blog/AiRadiologyGlossary'),
  '/blog/ai-radiology-for-small-hospitals-2026': () => import('./pages/blog/SmallHospitalRadiology'),
  '/blog/foundation-models-vs-narrow-ai-radiology': () => import('./pages/blog/FoundationModelsVsNarrowAI'),
  '/blog/performance-based-pricing-radiology-ai': () => import('./pages/blog/PerformanceBasedPricingRadiologyAI'),
  '/blog/should-patients-be-told-when-ai-reads-their-scan': () => import('./pages/blog/AiDisclosurePatientTrust'),
  '/blog/ai-radiology-reporting-draft-then-sign': () => import('./pages/blog/GenerativeAiRadiologyReportingDraft'),
  '/blog/radiology-ai-access-disparities': () => import('./pages/blog/RadiologyAiAccessDisparities'),
  '/blog/how-ai-cuts-mri-wait-times': () => import('./pages/blog/AiMriWaitTimesThroughput'),
  '/blog/lung-cancer-screening-ct-criteria': () => import('./pages/blog/LungCancerScreeningCtCriteria'),
  '/blog/medical-device-cybersecurity': () => import('./pages/blog/MedicalDeviceCybersecurity'),
  '/blog/radiology-prior-authorization-imaging-throughput': () => import('./pages/blog/RadiologyPriorAuthorizationThroughput'),
};

export const normalizePath = (pathname: string): string =>
  pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolved = new Map<string, ComponentType<any>>();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyComponents = new Map<string, ComponentType<any>>();

export async function preloadRoute(pathname: string): Promise<void> {
  const key = normalizePath(pathname);
  const imp = routeImporters[key];
  if (!imp || resolved.has(key)) return;
  const mod = await imp();
  resolved.set(key, mod.default);
}

export function RoutePage({ path }: { path: string }) {
  const Hit = resolved.get(path);
  if (Hit) return <Hit />;
  let Lazy = lazyComponents.get(path);
  if (!Lazy) {
    Lazy = lazy(routeImporters[path]);
    lazyComponents.set(path, Lazy);
  }
  const L = Lazy;
  return (
    <Suspense fallback={null}>
      <L />
    </Suspense>
  );
}
