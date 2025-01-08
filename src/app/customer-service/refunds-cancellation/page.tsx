"use client";

import Link from "next/link";
import { FC } from "react";

const RefundsCancellation: FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Refunds & Cancellation Policy</h2>
          <p className="text-lg text-gray-600 mb-8">
            At Home made products, we aim to provide you with a seamless shopping experience. However, if you need to cancel or refund an order, please review our policies below:
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Cancellation Policy</h3>
          <p className="text-lg text-gray-700">
            - You can cancel your order within <b>24 hours</b>  of placing it, provided that it has not been shipped yet.
            <br />
            - To cancel your order, please <Link href='/contact' className="font-bold text-[#9bb53C] hover:underline">Contact us</Link> at with your order number. We will process the cancellation request and issue a refund to your original payment method.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Refund Policy</h3>
          <p className="text-lg text-gray-700">
            - If you have received a damaged or defective product, you may be eligible for a refund within <b>7 days</b> of receiving the item.
            <br />
            - To request a refund, please contact us at <b>info@homemadeproducts.com</b> with your order details and a description of the issue.
            <br />
            - Refunds will be processed back to the original payment method used for the purchase.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Non-refundable Items</h3>
          <p className="text-lg text-gray-700">
            - Personalized products, gift cards, and items marked as non-returnable at checkout are not eligible for refunds.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundsCancellation;
