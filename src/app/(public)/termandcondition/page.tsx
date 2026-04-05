export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read our terms and conditions to understand the rules, responsibilities, and limitations when using our platform.",
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800">
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 shadow-sm">
            Legal Information
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-gray-600 leading-8">
            These terms explain the rules and conditions for using our website,
            products, and services.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Effective Date:{" "}
            <span className="font-medium text-gray-700">April 5, 2026</span>
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 md:p-10 lg:p-14">
          <div className="space-y-8 text-[15px] md:text-[16px] leading-8">
            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using{" "}
                <span className="font-semibold text-gray-900">
                  [Your Website / App Name]
                </span>
                , you agree to be bound by these Terms & Conditions. If you do
                not agree with any part of these terms, you should not use our
                services.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Use of Our Services
              </h2>
              <p>
                You agree to use our website and services only for lawful
                purposes and in a manner that does not violate the rights of
                others or restrict their use of the platform.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li>Do not misuse or interfere with our website</li>
                <li>Do not attempt unauthorized access to accounts or data</li>
                <li>Do not use the platform for fraudulent activity</li>
                <li>Do not upload harmful, illegal, or abusive content</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Account Responsibility
              </h2>
              <p>
                If you create an account with us, you are responsible for
                maintaining the confidentiality of your login credentials and
                for all activities that occur under your account.
              </p>
              <p className="mt-4">
                You agree to provide accurate and complete information during
                registration and to keep your account details updated.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Products, Orders, and Pricing
              </h2>
              <p>
                We make every effort to ensure product descriptions, pricing,
                and availability are accurate. However, errors may occasionally
                occur.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li>Prices are subject to change without notice</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Product availability may change at any time</li>
                <li>We may limit quantities purchased per user or order</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Payments
              </h2>
              <p>
                If you make purchases through our platform, you agree to provide
                valid and accurate payment information. Payments may be
                processed through third-party payment providers.
              </p>
              <p className="mt-4">
                We are not responsible for payment failures caused by banking,
                card issues, third-party gateways, or incorrect information
                provided by you.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Shipping, Delivery, and Returns
              </h2>
              <p>
                Delivery timelines, return conditions, and refund eligibility
                may vary depending on the product or service.
              </p>
              <p className="mt-4">
                Please refer to our separate shipping, return, or refund policy
                where applicable.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Intellectual Property
              </h2>
              <p>
                All content on this website, including but not limited to text,
                graphics, logos, icons, images, design, and code, is the
                property of{" "}
                <span className="font-semibold text-gray-900">
                  [Your Website / App Name]
                </span>{" "}
                or its licensors and is protected by applicable intellectual
                property laws.
              </p>
              <p className="mt-4">
                You may not copy, reproduce, distribute, modify, or exploit any
                part of our content without prior written permission.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. User Content
              </h2>
              <p>
                If you submit reviews, comments, images, or other content, you
                grant us a non-exclusive, worldwide, royalty-free license to
                use, display, reproduce, and distribute such content for
                business and service-related purposes.
              </p>
              <p className="mt-4">
                You are solely responsible for any content you submit and must
                ensure it does not violate any laws or third-party rights.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, we shall not be liable
                for any indirect, incidental, special, or consequential damages
                arising out of or related to your use of our services.
              </p>
              <p className="mt-4">
                Our services are provided on an “as is” and “as available”
                basis, without warranties of any kind unless otherwise stated.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate access to our
                services at any time, without prior notice, if we believe you
                have violated these Terms & Conditions or applicable laws.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Changes to These Terms
              </h2>
              <p>
                We may update these Terms & Conditions from time to time. Any
                changes will be posted on this page with an updated effective
                date.
              </p>
              <p className="mt-4">
                Your continued use of our platform after such changes indicates
                your acceptance of the updated terms.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Governing Law
              </h2>
              <p>
                These Terms & Conditions shall be governed and interpreted in
                accordance with the laws applicable in your jurisdiction, unless
                otherwise required by law.
              </p>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. Contact Us
              </h2>
              <p>
                If you have any questions regarding these Terms & Conditions,
                you can contact us at:
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
