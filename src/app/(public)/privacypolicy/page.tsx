export const metadata = {
  title: "Privacy Policy",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800">
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 shadow-sm">
            Legal Information
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-gray-600 leading-8">
            Your trust matters to us. This page explains how we collect, use,
            store, and protect your information when you use our platform.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Effective Date:{" "}
            <span className="font-medium text-gray-700">April 5, 2026</span>
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 md:p-10 lg:p-14">
          <div className="space-y-8 text-[15px] md:text-[16px] leading-8">
            {/* Section */}
            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to{" "}
                <span className="font-semibold text-gray-900">
                  [Your Website / App Name]
                </span>
                . Your privacy is important to us. This Privacy Policy explains
                how we collect, use, disclose, and protect your information when
                you use our website, mobile application, or services.
              </p>
              <p className="mt-4">
                By using our services, you agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-5">
                2. Information We Collect
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
                    a) Personal Information
                  </h3>
                  <p>
                    We may collect personal information that you voluntarily
                    provide, including:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Billing or shipping address</li>
                    <li>Profile details</li>
                    <li>Uploaded files or images</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
                    b) Account Information
                  </h3>
                  <p>
                    If you create an account, we may collect login credentials
                    and related profile information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
                    c) Usage Data
                  </h3>
                  <p>
                    We may automatically collect certain technical information
                    such as:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Pages visited</li>
                    <li>Time spent on pages</li>
                    <li>Referring URLs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">
                    d) Cookies and Tracking Technologies
                  </h3>
                  <p>
                    We may use cookies, local storage, and similar technologies
                    to improve user experience, remember preferences, and
                    analyze traffic.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p>We may use your information to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>Provide, operate, and maintain our services</li>
                <li>Create and manage user accounts</li>
                <li>Process orders, requests, or inquiries</li>
                <li>Improve website functionality and user experience</li>
                <li>Send service-related emails or notifications</li>
                <li>Provide customer support</li>
                <li>Prevent fraud, abuse, or unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. How We Share Your Information
              </h2>
              <p>
                We do not sell your personal information. However, we may share
                information in the following situations:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>
                  <span className="font-medium text-gray-900">
                    Service Providers:
                  </span>{" "}
                  Hosting, analytics, payment processors, cloud storage, email
                  services, and authentication providers.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Legal Compliance:
                  </span>{" "}
                  If required by law or to protect our rights.
                </li>
                <li>
                  <span className="font-medium text-gray-900">
                    Business Transfers:
                  </span>{" "}
                  In connection with a merger, acquisition, or asset sale.
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Data Storage and Security
              </h2>
              <p>
                We take reasonable technical and organizational measures to
                protect your information from unauthorized access, loss, misuse,
                or alteration.
              </p>
              <p className="mt-4">
                However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy, comply with legal obligations, resolve disputes, and
                enforce our agreements.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Your Rights
              </h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent where applicable</li>
                <li>Object to certain processing activities</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the contact
                details below.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Third-Party Services
              </h2>
              <p>
                Our website or app may use third-party services such as payment
                gateways, authentication providers, analytics tools, or cloud
                storage providers. These third parties may collect and process
                data according to their own privacy policies.
              </p>
              <p className="mt-4">
                Examples may include services like payment processors, cloud
                image hosting, analytics platforms, and email delivery
                providers.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Children’s Privacy
              </h2>
              <p>
                Our services are not intended for children under the age of 13
                (or the minimum legal age in your jurisdiction). We do not
                knowingly collect personal information from children without
                appropriate consent.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, you can
                contact us at:
              </p>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm p-6 space-y-3">
                <p>
                  <span className="font-medium text-gray-900">Email:</span>{" "}
                  support@[yourdomain].com
                </p>
                <p>
                  <span className="font-medium text-gray-900">Website:</span>{" "}
                  www.[yourdomain].com
                </p>
                <p>
                  <span className="font-medium text-gray-900">Address:</span>{" "}
                  [Your Business Address]
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
