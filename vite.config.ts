import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const schemaMarkupPlugin = (): Plugin => ({
  name: "inject-schema-markup",
  enforce: "post",
  transformIndexHtml(html) {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "xAID",
        "url": "https://xaid.ai",
        "logo": "https://xaid.ai/favicon.ico",
        "description": "AI-powered CT reporting service for outpatient imaging centers and teleradiology providers.",
        "areaServed": "US",
        "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "url": "https://xaid.ai/#contact-us" },
        "sameAs": ["https://www.linkedin.com/company/xaid-ai"]
      },
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "xAID AI CT Reporting Service",
        "applicationCategory": "MedicalApplication",
        "operatingSystem": "Web",
        "url": "https://xaid.ai",
        "description": "Ready-to-sign AI CT radiology reports. Head, chest, abdomen CT. Two AI layers + radiologist review. 2-12 hr TAT. 90% no-edit guarantee. HIPAA compliant.",
        "featureList": ["Ready-to-sign CT reports", "Head, chest, abdomen CT", "Two AI layers + radiologist review", "2-12 hr TAT", "90% no-edit guarantee", "HIPAA compliant", "DICOM/HL7 integration", "ISO 27001 certified"],
        "offers": { "@type": "Offer", "description": "Per-study pricing. Free 5-study pilot.", "url": "https://xaid.ai/#contact-us" },
        "provider": { "@type": "Organization", "name": "xAID", "url": "https://xaid.ai" }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the turnaround time for AI CT reports?", "acceptedAnswer": { "@type": "Answer", "text": "2 to 12 hours, configurable. Optimized for outpatient and scheduled studies." } },
          { "@type": "Question", "name": "What if an AI radiology report needs edits?", "acceptedAnswer": { "@type": "Answer", "text": "We guarantee 90% of reports need zero edits. If we fall below that threshold, we reimburse. It's the only such guarantee in radiology AI." } },
          { "@type": "Question", "name": "How does DICOM/HL7 integration work?", "acceptedAnswer": { "@type": "Answer", "text": "Standard DICOM send to our PACS. Reports return via HL7. Setup under one week." } },
          { "@type": "Question", "name": "What CT scan types does xAID cover?", "acceptedAnswer": { "@type": "Answer", "text": "Head, chest, and abdomen CT. 150+ findings per report. MRI on roadmap." } },
          { "@type": "Question", "name": "Is AI CT reporting HIPAA compliant?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. HIPAA compliant, US-based AWS, BAA available, ISO 27001 certified." } }
        ]
      }
    ];

    const scriptTags = schemas
      .map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
      .join("\n");

    return html.replace("</head>", `${scriptTags}\n</head>`);
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    schemaMarkupPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
