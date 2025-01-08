"use client";

import { FC } from "react";

const PrivacyPolicy: FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Privacy Policy</h2>
          <p className="text-lg text-gray-600 mb-8">
            At Home made products, your privacy is important to us. This privacy policy outlines the types of personal information that we collect and how we use, share, and protect it.
          </p>
        </section>

        <section className="mb-16"> 
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Information We Collect</h3>
          <p className="text-lg text-gray-700">
            - <b> Personal Information</b>: When you place an order, subscribe to our newsletter, or interact with our services, we may collect personal information such as your name, email address, shipping address, phone number, and payment information.
            <br />
            - <b>Usage Data</b>: We may collect information about how you interact with our website, including IP addresses, browser types, and pages visited.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">How We Use Your Information</h3>
          <p className="text-lg text-gray-700">
            - To process orders and payments.
            <br />
            - To communicate with you regarding your orders, promotions, and product recommendations.
            <br />
            - To improve our website and services.
            <br />
            - To comply with legal obligations.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Sharing Your Information</h3>
          <p className="text-lg text-gray-700">
            We do not sell or rent your personal information to third parties. We may share your data with trusted third-party services necessary to fulfill orders, such as payment processors and shipping providers.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Cookies</h3>
          <p className="text-lg text-gray-700">
            We use cookies to improve the user experience on our website. Cookies help us remember your preferences and personalize your experience.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Your Rights</h3>
          <p className="text-lg text-gray-700">
            You can request to access, update, or delete your personal data by contacting us. You also have the right to opt-out of marketing communications at any time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
