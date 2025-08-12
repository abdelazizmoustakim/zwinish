import React from 'react';
import Head from 'next/head';

const TermsOfUse = () => {
  return (
    <>
      <Head>
        <title>Terms of Use | Zwinish - Beautiful Blogging Platform</title>
        <meta name="description" content="Terms of Use for Zwinish.com - Learn about our terms, conditions, and policies for using our blogging platform and services." />
        <meta name="keywords" content="terms of use, zwinish terms, user agreement, privacy policy, blogging platform terms" />
        <link rel="canonical" href="https://zwinish.com/terms-of-use" />
        <meta property="og:title" content="Terms of Use | Zwinish" />
        <meta property="og:description" content="Terms of Use for Zwinish.com - Learn about our terms, conditions, and policies." />
        <meta property="og:url" content="https://zwinish.com/terms-of-use" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://zwinish.com/og-image.png" />
        <meta name="twitter:title" content="Terms of Use | Zwinish" />
        <meta name="twitter:description" content="Terms of Use for Zwinish.com" />
        <meta name="twitter:image" content="https://zwinish.com/og-image.png" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Terms of Use
            </h1>
            
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> August 12, 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-8">
                Welcome to Zwinish.com ("we," "our," "us"). These Terms govern your use of our website, services, and content. By creating an account or using our site, you agree to follow these rules.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                1. What We Offer
              </h2>
              <p className="text-gray-700 mb-8">
                Zwinish.com provides access to blogs, premium articles, online courses, and other paid or free digital services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                2. Accounts
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>You must be at least 13 years old to create an account.</li>
                <li>You are responsible for keeping your login information secure.</li>
                <li>If you believe your account has been compromised, notify us immediately.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                3. Payments & Refunds
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Payments for courses, premium content, or services are processed securely through third-party payment providers.</li>
                <li>All prices are listed before purchase.</li>
                <li>Refunds, if offered, are subject to our refund policy (posted separately or provided upon request).</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                4. Use of Our Content
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>All content on Zwinish.com is owned by us or our licensors.</li>
                <li>You may not copy, distribute, or reuse any content without written permission.</li>
                <li>Access to premium content is for personal, non-commercial use only.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                5. Prohibited Activities
              </h2>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
                <li>Use the site for illegal purposes.</li>
                <li>Attempt to hack, disrupt, or overload our systems.</li>
                <li>Share your account or paid content with others without authorization.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                6. Disclaimer & Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-8">
                We strive to keep our content accurate and our services available, but we do not guarantee uninterrupted service or error-free content. We are not liable for losses or damages from your use of the site.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
                7. Changes to These Terms
              </h2>
              <p className="text-gray-700 mb-8">
                We may update these Terms from time to time. The latest version will always be posted here.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  If you have any questions about these Terms of Use, please contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfUse;
