"use client";

import { FC } from "react";

const ReturnExchange: FC = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <section className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Return & Exchange Policy</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        At Home made products, we want you to be completely satisfied with your purchase. If you&#39;re not happy with your order, we offer a return and exchange policy under the following conditions:
                    </p>
                </section>

                <section className="mb-16">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Return Policy</h3>
                    <p className="text-lg text-gray-700">
                        - <b>Returns are accepted within 2 days </b>  of receiving the item.
                        <br />
                        - The item must be in <b>unused and resalable condition </b> with the original packaging and tags intact.
                        <br />
                        - To initiate a return, please email us at <b>info@homemadeproducts.com</b>  with your order number and reason for return.
                    </p>
                </section>

                <section className="mb-16">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Exchange Policy</h3>
                    <p className="text-lg text-gray-700">
                        - <b> Exchanges are allowed within 2 days</b>  of receiving the item, provided the item is defective, damaged, or wrongfully shipped.
                        <br />
                        - The item must be in <b> unused and resalable condition</b> .
                        <br />
                        - To request an exchange, please contact us at <b> info@homemadeproducts.com</b> . We will guide you through the exchange process.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Items Excluded from Return or Exchange</h3>
                    <p className="text-lg text-gray-700">
                        - <b> Products purchased after 2 days from the sale date</b>  are not eligible for return or exchange.
                        <br />
                        - <b> Personalized products</b>  and <b> sale items</b>  are final sale and cannot be returned or exchanged.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ReturnExchange;
