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
  '/blog/radiologist-pay-stagnation-2026': () => import('./pages/blog/RadiologistPayStagnation2026'),
  '/blog/qualifying-payment-amount-no-surprises-act': () => import('./pages/blog/QualifyingPaymentAmountNoSurprisesAct'),
  '/blog/cloud-based-medical-image-sharing': () => import('./pages/blog/CloudBasedMedicalImageSharing'),
  '/blog/coalition-for-health-ai-vendor-security-checklist': () => import('./pages/blog/CoalitionForHealthAiVendorSecurityChecklist'),
  '/blog/radiology-viewer-software-reporting-bottleneck': () => import('./pages/blog/RadiologyViewerSoftwareReportingBottleneck'),
  '/blog/fda-approved-ai-radiology-funding-bill': () => import('./pages/blog/FdaApprovedAiRadiologyFundingBill'),
  '/blog/ai-in-radiology': () => import('./pages/blog/AiInRadiology'),
  '/blog/nighthawk-radiology': () => import('./pages/blog/NighthawkRadiology'),
  '/blog/teleradiology-jobs': () => import('./pages/blog/TeleradiologyJobs'),
  '/blog/patients-first-act-radiology': () => import('./pages/blog/PatientsFirstActRadiology'),
  '/blog/enterprise-imaging-modernization-capital-gap': () => import('./pages/blog/EnterpriseImagingModernizationCapitalGap'),
  '/blog/radiology-reporting-guide': () => import('./pages/blog/RadiologyReportingGuide'),
  '/blog/automation-bias-radiology-ai': () => import('./pages/blog/AutomationBiasRadiologyAi'),
  '/blog/what-is-teleradiology': () => import('./pages/blog/WhatIsTeleradiology'),
  '/blog/2027-medicare-physician-fee-schedule-radiology': () => import('./pages/blog/MedicareFeeSchedule2027Radiology'),
  '/blog/will-ai-replace-radiologists': () => import('./pages/blog/WillAiReplaceRadiologists'),
  '/blog/ct-scan-for-pulmonary-embolism-cancer-patients': () => import('./pages/blog/CtScanPulmonaryEmbolismCancer'),
  '/blog/low-value-imaging-clinician-knowledge': () => import('./pages/blog/LowValueImagingClinicianKnowledge'),
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
  '/blog/wrong-patient-radiology-error': () => import('./pages/blog/WrongPatientRadiologyError'),
  '/blog/radiology-malpractice-ai-reporting': () => import('./pages/blog/RadiologyMalpracticeAiReporting'),
  '/blog/radiology-ai-clinical-outcomes-evidence-gap': () => import('./pages/blog/RadiologyAiClinicalOutcomesEvidenceGap'),
  '/blog/incidental-lung-nodule-malignancy-risk-ai': () => import('./pages/blog/IncidentalLungNoduleMalignancyRisk'),
  '/blog/radiology-outsourcing-gone-wrong': () => import('./pages/blog/RadiologyOutsourcingGoneWrong'),
  '/blog/site-neutral-payments-imaging': () => import('./pages/blog/SiteNeutralPaymentsImaging'),
  '/blog/teleradiology-companies-policy-watchlist': () => import('./pages/blog/TeleradiologyCompaniesPolicyWatchlist'),
  '/blog/lung-cancer-screening-program-integration': () => import('./pages/blog/LungCancerScreeningProgramIntegration'),
  '/blog/radiologist-salary-transparency-2026': () => import('./pages/blog/RadiologistSalaryTransparency'),
  '/blog/best-metro-areas-for-radiologists-2026': () => import('./pages/blog/BestMetroAreasForRadiologists'),
  '/blog/radiology-private-equity-stay-independent': () => import('./pages/blog/RadiologyPrivateEquityStayIndependent'),
  '/blog/overutilization-of-medical-imaging': () => import('./pages/blog/OverutilizationOfMedicalImaging'),
  '/blog/how-to-choose-a-teleradiology-company': () => import('./pages/blog/HowToChooseATeleradiologyCompany'),
  '/blog/incidental-findings-chest-ct-breast-lesions': () => import('./pages/blog/IncidentalFindingsChestCtBreastLesions'),
  '/blog/ai-radiology-quality-assurance': () => import('./pages/blog/AiRadiologyQualityAssurance'),
  '/blog/radiology-report-language-precision': () => import('./pages/blog/RadiologyReportLanguagePrecision'),
  '/blog/clinical-indication-radiology-orders': () => import('./pages/blog/ClinicalIndicationRadiologyOrders'),
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
