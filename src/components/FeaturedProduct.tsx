"use client"

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@radix-ui/react-dialog';
import ProductCard from './ProductCard';

const FeaturedProduct = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAddToCart = () => {
        setIsOpen(true);
    };

    return (

        <section
        //  className="py-16 bg-gradient-to-r from-[#134C28] via-[#9BB536] to-[#669E42]"
     className='bg-[#F9FAFB] py-16'
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#134C28] text-center mb-12">
                    Our Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProductCard
                        image="/images/desighee1.jpg"
                        title="Desi Ghee"
                        description="Pure and healthy desi ghee."
                        onAddToCart={handleAddToCart}
                    />
                    <ProductCard
                    image="/images/desighee1.jpg"
                        title="Organic Honey"
                        description="100% natural and raw honey."
                        onAddToCart={handleAddToCart}
                    />
                    <ProductCard
                           image="/images/desighee1.jpg"
                        title="Homemade Spices"
                        description="Freshly ground and aromatic."
                        onAddToCart={handleAddToCart}
                    />
                </div>
            </div>

            {/* Cart Popup */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <div></div>
                </DialogTrigger>
                <DialogContent className="bg-white text-center p-8 rounded-xl shadow-lg">
                    <DialogTitle className="text-2xl font-bold text-[#134C28]">Added to Cart</DialogTitle>
                    <DialogDescription className="text-lg text-[#9BB536] mt-4">
                        Your item has been successfully added to the cart!
                    </DialogDescription>
                    <DialogClose asChild>
                        <button className="mt-6 px-6 py-3 bg-[#134C28] hover:bg-[#669E42] text-white font-semibold rounded shadow-md transition">
                            Close
                        </button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default FeaturedProduct;
