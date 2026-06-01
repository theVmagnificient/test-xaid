export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateIso: string;
  category: string;
  readingTime: number; // minutes
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-radiology-reporting-buyers-guide-2026',
    title: 'AI Radiology Reporting Software: A 2026 Buyer\'s Guide for Imaging Centers',
    excerpt: 'Not all AI radiology tools produce the same output. Some flag findings; others deliver complete signed reports. Here\'s how to evaluate vendors — accuracy data, pricing models, radiologist review, quality guarantees, and compliance — before you commit.',
    date: 'April 28, 2026',
    dateIso: '2026-04-28',
    category: 'Buyer Guide',
    readingTime: 11,
    keywords: ['AI radiology software', 'best AI radiology reporting', 'AI CT reporting comparison'],
  },
  {
    slug: 'how-to-switch-from-teleradiology-to-ai-ct-reporting',
    title: 'How to Switch from Teleradiology to AI CT Reporting: A Step-by-Step Guide',
    excerpt: 'DICOM integration completes in under one week. A structured pilot lets you validate report quality before any contract change. Here is the complete transition process — from pilot evaluation to full cutover — including what your IT team actually needs to do.',
    date: 'April 14, 2026',
    dateIso: '2026-04-14',
    category: 'Implementation',
    readingTime: 8,
    keywords: ['switch teleradiology AI', 'AI radiology implementation', 'DICOM AI integration', 'replace teleradiology'],
  },
  {
    slug: 'ai-radiology-for-small-hospitals-2026',
    title: 'AI Radiology for Small and Community Hospitals 2026: Coverage Options, Costs, and Implementation',
    excerpt: 'Small hospitals and critical access hospitals face the same problem: can\'t hire a full-time radiologist, can\'t afford locum rates, and traditional teleradiology after-hours surcharges make 24/7 coverage unaffordable. Full comparison of coverage options, costs, and implementation path in 2026.',
    date: 'March 19, 2026',
    dateIso: '2026-03-19',
    category: 'Operations',
    readingTime: 9,
    keywords: ['small hospital radiology', 'community hospital CT coverage', 'critical access hospital radiology', 'AI radiology hospital'],
  },
  {
    slug: 'ai-radiology-terminology-glossary',
    title: 'AI Radiology Terminology Glossary: Key Terms Explained',
    excerpt: 'Reference guide to 18 key terms in AI CT reporting, teleradiology, and medical imaging — from DICOM and HL7 to sensitivity/specificity, no-edit guarantee, foundation models, and after-hours surcharges. Plain-language definitions with clinical and operational context.',
    date: 'March 4, 2026',
    dateIso: '2026-03-04',
    category: 'Reference',
    readingTime: 10,
    keywords: ['AI radiology terminology', 'radiology glossary', 'DICOM definition', 'teleradiology terms', 'AI radiology glossary'],
  },
  {
    slug: 'after-hours-radiology-coverage-options',
    title: 'After-Hours Radiology Coverage Options 2026: On-Call, Locum, Teleradiology, and AI Compared',
    excerpt: 'Traditional teleradiology charges 30–100% surcharges for after-hours CT reads. A center reading 500 after-hours studies per month can pay $90,000–$300,000 per year in surcharges alone. Full comparison: in-house on-call, locum, traditional teleradiology, and AI CT reporting — costs, availability, quality, and guarantees.',
    date: 'February 17, 2026',
    dateIso: '2026-02-17',
    category: 'Operations',
    readingTime: 7,
    keywords: ['after-hours radiology coverage', 'radiology after-hours cost', 'after-hours CT reading', 'teleradiology surcharge'],
  },
  {
    slug: 'ct-radiology-coverage-costs-2026',
    title: 'CT Radiology Coverage Costs 2026: In-House, Teleradiology, Locum, and AI Compared',
    excerpt: 'A mid-volume outpatient imaging center can spend $300,000–$1.2 million annually on CT radiology coverage — depending entirely on the model. Full cost breakdown: in-house radiologist, locum, traditional teleradiology, and AI CT reporting, with per-study rates, after-hours costs, and quality guarantees.',
    date: 'February 3, 2026',
    dateIso: '2026-02-03',
    category: 'Cost Analysis',
    readingTime: 9,
    keywords: ['CT radiology coverage cost', 'teleradiology cost per study', 'locum radiologist cost', 'AI CT reporting cost'],
  },
  {
    slug: 'how-accurate-is-ai-radiology-reporting',
    title: 'How Accurate Is AI Radiology Reporting? Evidence from Published Clinical Studies',
    excerpt: 'What does the peer-reviewed evidence say about AI CT reporting accuracy? We analyzed two independent clinical studies — including a retrospective evaluation of 90 emergency chest CT scans — and compared the numbers to traditional radiology benchmarks.',
    date: 'January 15, 2026',
    dateIso: '2026-01-15',
    category: 'Clinical Evidence',
    readingTime: 8,
    keywords: ['AI radiology accuracy', 'how accurate is AI CT', 'AI vs radiologist accuracy'],
  },
  {
    slug: 'radiologist-shortage-2026-ai-ct-reporting',
    title: 'Radiologist Shortage 2026: How AI CT Reporting Fills the Gap',
    excerpt: 'The US faces a projected shortage of 42,000 physicians by 2034, with radiology among the hardest-hit specialties. Here\'s what the data says — and how outpatient centers and teleradiology providers are using AI to cover the gap today.',
    date: 'December 10, 2025',
    dateIso: '2025-12-10',
    category: 'Radiology Workforce',
    readingTime: 7,
    keywords: ['radiologist shortage', 'radiology staffing shortage', 'AI radiology shortage solution'],
  },
  {
    slug: 'ct-report-turnaround-time-benchmarks-2026',
    title: 'CT Report Turnaround Time Benchmarks 2026: What\'s Normal and What\'s Not',
    excerpt: 'ACR guidelines say routine CT reads should be signed within 24 hours. The reality is often 36–72 hours. Here\'s what drives turnaround times, what benchmarks look like across practice types, and what AI-assisted reporting actually delivers.',
    date: 'November 25, 2025',
    dateIso: '2025-11-25',
    category: 'Operations',
    readingTime: 6,
    keywords: ['CT report turnaround time', 'radiology TAT benchmarks', 'radiology report turnaround'],
  },
  {
    slug: 'ai-teleradiology-vs-traditional-teleradiology-2026',
    title: 'AI Teleradiology vs Traditional Teleradiology: Full 2026 Comparison Guide',
    excerpt: 'Traditional teleradiology services charge $80–350 per study and take 4–24 hours. AI-assisted teleradiology delivers the same output in 2–12 hours at lower per-study cost. But there are real differences worth understanding before you switch.',
    date: 'November 6, 2025',
    dateIso: '2025-11-06',
    category: 'Buyer Guide',
    readingTime: 10,
    keywords: ['AI teleradiology', 'AI vs teleradiology', 'AI teleradiology service comparison'],
  },
  {
    slug: 'is-ai-radiology-reporting-hipaa-compliant',
    title: 'Is AI Radiology Reporting HIPAA Compliant? What to Ask Before You Buy',
    excerpt: 'HIPAA compliance for AI radiology goes beyond encrypting images. A Business Associate Agreement, US-based infrastructure, audit logs, and radiologist sign-off are all required. Here\'s the compliance checklist — and what xAID satisfies.',
    date: 'October 21, 2025',
    dateIso: '2025-10-21',
    category: 'Compliance',
    readingTime: 7,
    keywords: ['HIPAA compliant AI radiology', 'AI radiology HIPAA', 'HIPAA AI CT reporting'],
  },
];
