"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error message as user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: typeof errors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true); // Show success message
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center">
      <div className="container mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-[#134C28]">Get in Touch</h1>
          <p className="text-lg text-[#9BB53C]">
            We&#39;d love to hear from you. Whether it&#39;s a question or feedback, feel free to reach out!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#134C28] mb-4">Contact Information</h2>
            <p className="text-lg text-[#9BB53C]">We are here to help you with any inquiries. Reach out to us!</p>
            <div className="mt-6">
              <p className="text-lg font-semibold text-[#134C28]">Email:</p>
              <p className="text-md text-[#669E42]">info@homemadeproducts.com</p>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-[#134C28]">Phone:</p>
              <p className="text-md text-[#669E42]">+123 456 7890</p>
            </div>
          </div>

          {/* Form or Success Message */}
          <div className="md:w-2/3">
            {formSubmitted ? (
              <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-3xl font-semibold text-[#134C28] mb-4">Thank You!</h2>
                <p className="text-lg text-[#9BB53C]">
                  Your message has been successfully sent. We will get back to you shortly!
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 py-3 px-6 bg-[#669E42] text-white font-semibold rounded-md hover:bg-[#134C28] transition duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F9FAFB] p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-semibold text-[#134C28]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full mt-2 p-3 border border-[#9BB53C] rounded-md focus:outline-none focus:ring-2 focus:ring-[#669E42] hover:ring-1 hover:ring-[#9BB53C] transition"
                  />
                  {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-semibold text-[#134C28]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full mt-2 p-3 border border-[#9BB53C] rounded-md focus:outline-none focus:ring-2 focus:ring-[#669E42] hover:ring-1 hover:ring-[#9BB53C] transition"
                  />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-lg font-semibold text-[#134C28]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full mt-2 p-3 border border-[#9BB53C] rounded-md focus:outline-none focus:ring-2 focus:ring-[#669E42] hover:ring-1 hover:ring-[#9BB53C] transition"
                  />
                  {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#669E42] text-white font-semibold rounded-md hover:bg-[#134C28] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
