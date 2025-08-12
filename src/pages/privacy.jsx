import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Zwinish - Beautiful Blogging Platform</title>
        <meta name="description" content="Privacy Policy for Zwinish.com - Learn how we collect, use, and protect your personal information on our blogging platform." />
        <meta name="keywords" content="privacy policy, zwinish privacy, data protection, personal information, cookies policy" />
        <link rel="canonical" href="https://zwinish.com/privacy" />
        <meta property="og:title" content="Privacy Policy | Zwinish" />
        <meta property="og:description" content="Privacy Policy for Zwinish.com - Learn how we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://zwinish.com/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zwinish.com/og-image.png" />
        <meta name="twitter:title" content="Privacy Policy | Zwinish" />
        <meta name="twitter:description" content="Privacy Policy for Zwinish.com" />
        <meta name="twitter:image" content="https://zwinish.com/og-image.png" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> August 12, 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8">
                At Zwinish.com, we respect your privacy and are committed to protecting it.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">We may collect:</p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li><strong>Account details:</strong> Name, email, payment information (handled by secure payment processors).</li>
                <li><strong>Site activity:</strong> Pages visited, content viewed, and preferences.</li>
                <li><strong>Technical data:</strong> IP address, browser type, cookies.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>To provide and manage your account.</li>
                <li>To process purchases and deliver paid content.</li>
                <li>To improve our website and services.</li>
                <li>To send updates and promotions (you can unsubscribe anytime).</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                3. Sharing of Information
              </h2>
              <p className="text-gray-700 mb-4">We do not sell your personal data. We may share it with:</p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Payment processors.</li>
                <li>Hosting and analytics providers.</li>
                <li>Legal authorities if required by law.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                4. Cookies
              </h2>
              <p className="text-gray-700 mb-8">
                We use cookies for functionality, analytics, and to improve user experience. You can manage cookies through your browser settings.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                5. Security
              </h2>
              <p className="text-gray-700 mb-8">
                We take reasonable measures to protect your data but cannot guarantee complete security.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                6. Your Rights
              </h2>
              <p className="text-gray-700 mb-8">
                You may request access to, correction of, or deletion of your personal information by contacting us.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                7. Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-8">
                We may update this policy at any time. The updated version will be posted here.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  If you have any questions about this Privacy Policy, please contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
