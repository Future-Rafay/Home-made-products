"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from "emailjs-com"; // Import EmailJS

export default function CheckoutPage() {
  const cartItems = [
    { id: 1, name: "Desi Ghee", price: 10, quantity: 2 },
    { id: 2, name: "Honey Jar", price: 15, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  // State for errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const newErrors: typeof errors = {
      name: "",
      email: "",
      address: "",
      phone: "",
    };
    if (!formData.name) newErrors.name = "Full Name is required.";
    if (!formData.email) {
      newErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }

    setErrors(newErrors);

    // Check if there are no errors
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      try {
        // Send email to cooks using EmailJS
        const emailParams = {
          name: formData.name,
          email: formData.email,
          address: formData.address,
          phone: formData.phone,
          cartItems: cartItems.map((item) => `${item.name} (Qty: ${item.quantity})`).join(", "),
          totalPrice: `$${totalPrice}`,
        };

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ORDER;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

        // Check if the values exist
        if (!serviceID || !templateID || !userID) {
          console.error("Missing EmailJS configuration!");
          return; // Exit if any of the values are missing
        }

        await emailjs.send(
          serviceID, // Your EmailJS service ID
          templateID, // Your EmailJS template ID
          emailParams,
          userID // Your EmailJS user ID
        );

        alert("Order placed successfully!");
        setFormData({ name: "", email: "", address: "", phone: "" }); // Clear form
      } catch (error) {
        console.error("Error placing order:", error);
        alert("There was an error placing the order. Please try again.");
      }
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // Clear the error for the field being edited
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-[#134C28] mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-[#1F2937]">
            Full Name
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            className={`border-[#669E42] focus:ring-[#669E42] focus:border-[#9BB53C] ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-[#1F2937]">
            Email Address
          </label>
          <Input
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            placeholder="john.doe@example.com"
            className={`border-[#669E42] focus:ring-[#669E42] focus:border-[#9BB53C] ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="address" className="text-sm text-[#1F2937]">
            Address
          </label>
          <Input
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="123 Nature Street, Green City"
            className={`border-[#669E42] focus:ring-[#669E42] focus:border-[#9BB53C] ${errors.address ? "border-red-500" : ""}`}
          />
          {errors.address && (
            <span className="text-red-500 text-sm">{errors.address}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm text-[#1F2937]">
            Phone Number
          </label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            type="tel"
            placeholder="+123 456 7890"
            className={`border-[#669E42] focus:ring-[#669E42] focus:border-[#9BB53C] ${errors.phone ? "border-red-500" : ""}`}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}
        </div>
        <Button
          type="submit"
          className="bg-[#669E42] hover:bg-[#9BB53C] text-white mt-4"
        >
          Place Order
        </Button>
      </form>
    </div>
  );    
}
