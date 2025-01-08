"use client"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name is too long"),
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<any>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const errors: any = {};
      result.error.errors.forEach((err) => {
        errors[err.path[0]] = err.message;
      });
      setFormErrors(errors);
      return;
    }

    // Handle form submission logic (e.g., send data to an API)
    console.log("Form Submitted Successfully", formData);
    setFormErrors({}); // Clear errors after successful submission
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="w-screen container mx-auto px-6">
        {/* Contact Information */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help! Reach out to us with any questions or feedback.
          </p>

          <div className="flex flex-col items-center space-y-10 md:flex-row flex-wrap justify-center gap-0 md:gap-6 lg:gap-12">
            <div className="flex flex-col items-center w-1/3 sm:w-1/2 md:w-1/3">
              <FaPhoneAlt size={40} className="text-green-600 mb-2" />
              <h4 className="text-xl font-semibold text-green-700">Phone</h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center w-1/3 sm:w-1/2 md:w-1/3">
              <FaEnvelope size={40} className="text-green-600 mb-2" />
              <h4 className="text-xl font-semibold text-green-700">Email</h4>
              <p className="text-gray-600">info@homemadeproducts.com</p>
            </div>
            <div className="flex flex-col items-center w-1/3 sm:w-1/2 md:w-1/3">
              <FaMapMarkerAlt size={40} className="text-green-600 mb-2" />
              <h4 className="text-xl font-semibold text-green-700">Location</h4>
              <p className="text-gray-600">123 Greenway Blvd, Eco City</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-green-700 text-center mb-8">
            Send Us a Message
          </h3>

          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg"
          >
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full p-3 mt-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                placeholder="Enter your full name"
                required
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full p-3 mt-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                placeholder="Enter your email"
                required
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full p-3 mt-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                placeholder="Write your message here"
                rows={5}
                required
              ></textarea>
              {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Map Section (Placeholder) */}
        <section>
          <h3 className="text-2xl font-semibold text-green-700 text-center mb-8">Find Us</h3>
          <div className="bg-gray-200 p-4 rounded-lg">
            {/* Replace this with an actual embedded map (e.g., Google Maps iframe) */}
            <div className="h-60 bg-gray-300 rounded-lg flex justify-center items-center text-gray-500">
              <p>Map Placeholder</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
