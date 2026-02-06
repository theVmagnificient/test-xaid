import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main id="privacy-policy" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <section className="privacy-policy container-xaid">
          <div className="mb-8">
            <Link
              to="/"
              className="text-primary hover:text-primary/90 transition-colors"
            >
              ← Back
            </Link>
          </div>
          <div className="privacy-policy-header mb-12">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              GDPR Privacy Policy
            </h1>
            <p className="mt-2 text-muted-foreground">Last Updated: 09.2024</p>
          </div>

          <div
            id="privacy-policy-sections"
            className="privacy-policy-body prose prose-invert prose-headings:font-semibold prose-p:text-muted-foreground max-w-none"
          >
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Personal Data We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                We may collect and process the following types of personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Identity Data:</strong>{" "}
                  Name, username, or similar identifier.
                </li>
                <li>
                  <strong className="text-foreground">Contact Data:</strong>{" "}
                  Email address and phone number.
                </li>
                <li>
                  <strong className="text-foreground">Technical Data:</strong>{" "}
                  IP address, browser type and version, time zone, browser
                  plug-in types and versions, operating system and platform.
                </li>
                <li>
                  <strong className="text-foreground">Usage Data:</strong>{" "}
                  Information about how you use our website, products and
                  services.
                </li>
                <li>
                  <strong className="text-foreground">Marketing and
                  Communications Data:</strong> Your preferences in receiving
                  marketing from us and your communication preferences.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. How We Use Your Personal Data
              </h2>
              <p className="text-muted-foreground mb-4">
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or information to improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Legal Basis for Processing (GDPR)
              </h2>
              <p className="text-muted-foreground mb-4">
                If you are in the European Economic Area (EEA), our legal basis
                for collecting and using your personal data depends on the data
                concerned and the specific context in which we collect it. We may
                process your personal data because:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We need to perform a contract with you</li>
                <li>You have given us permission to do so</li>
                <li>The processing is in our legitimate interests and not
                overridden by your rights</li>
                <li>To comply with the law</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Data Retention
              </h2>
              <p className="text-muted-foreground">
                We will retain your personal data only for as long as is
                necessary for the purposes set out in this Privacy Policy. We
                will retain and use your personal data to the extent necessary
                to comply with our legal obligations, resolve disputes, and
                enforce our policies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Your Data Protection Rights (GDPR)
              </h2>
              <p className="text-muted-foreground mb-4">
                If you are a resident of the European Economic Area, you have
                certain data protection rights, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The right to access, update or delete the information we have
                on you</li>
                <li>The right of rectification</li>
                <li>The right to object</li>
                <li>The right of restriction</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
                <li>The right to lodge a complaint with a supervisory
                authority</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to track
                activity on our service and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              to="/"
              className="text-primary hover:text-primary/90 transition-colors"
            >
              ← Back
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
