import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FaLeaf, FaCogs, FaHands } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-6">
        {/* Company Overview */}
        <section className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#134C28] mb-4">
            About Homemade Products
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            At Homemade Products, we believe in the beauty of nature and the importance of
            sustainability. Our products are crafted with care and passion, using only the
            highest-quality ingredients to ensure they meet the needs of a healthy lifestyle.
          </p>
        </section>

        {/* How We Make Our Products */}
        <section className="mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#134C28] text-center mb-8">
            How We Make Our Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="bg-white shadow-lg rounded-lg p-6">
              <FaLeaf size={40} className="text-[#9BB536] mb-4" />
              <h4 className="text-xl font-semibold text-[#134C28] mb-2">Sourcing the Best Ingredients</h4>
              <p className="text-gray-600">
                We source only the best, organic ingredients from trusted suppliers. Our commitment
                to sustainability ensures that every product is environmentally friendly.
              </p>
            </Card>

            <Card className="bg-white shadow-lg rounded-lg p-6">
              <FaCogs size={40} className="text-[#9BB536] mb-4" />
              <h4 className="text-xl font-semibold text-[#134C28] mb-2">Meticulous Production</h4>
              <p className="text-gray-600">
                Our production process is hands-on and detailed, ensuring that each product is
                crafted with the utmost care. We use eco-friendly materials and methods to keep our
                carbon footprint low.
              </p>
            </Card>

            <Card className="bg-white shadow-lg rounded-lg p-6">
              <FaHands size={40} className="text-[#9BB536] mb-4" />
              <h4 className="text-xl font-semibold text-[#134C28] mb-2">Handmade with Love</h4>
              <p className="text-gray-600">
                Every product is handmade with love and dedication by our skilled artisans. We
                believe in the value of craftsmanship and the story behind every product.
              </p>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-[#134C28] mb-8">
            Meet the Team Behind the Magic
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <Image src="/images/emily.jpg" alt="Team Member 1" height={128} width={128} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-[#134C28]">Sarah Johnson</h4>
              <p className="text-gray-600">Lead Artisan</p>
              <p className="text-gray-500">
                Sarah ensures that every product meets our high-quality standards. She’s passionate
                about sustainability and craftsmanship.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
            <Image src="/images/carl.jpg" alt="Team Member 1" height={128} width={128} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-[#134C28]">Michael Brown</h4>
              <p className="text-gray-600">Production Manager</p>
              <p className="text-gray-500">
                Michael manages the production process, ensuring that everything runs smoothly and
                that our products are produced efficiently.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
            <Image src="/images/chandler.jpg" alt="Team Member 1" height={128} width={128} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-[#134C28]">Emily Davis</h4>
              <p className="text-gray-600">Sustainability Expert</p>
              <p className="text-gray-500">
                Emily is dedicated to reducing our environmental impact and finding innovative
                ways to make our products more sustainable.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="text-center">
          <h3 className="text-2xl font-semibold text-[#134C28] mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold text-[#134C28] mb-2">Sustainability</h4>
              <p className="text-gray-600">
                We are committed to reducing our environmental impact by using sustainable materials
                and eco-friendly production methods.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold text-[#134C28] mb-2">Quality</h4>
              <p className="text-gray-600">
                Our products are carefully crafted to meet the highest standards of quality and
                durability, ensuring customer satisfaction.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold text-[#134C28] mb-2">Integrity</h4>
              <p className="text-gray-600">
                We believe in being honest and transparent in all our processes, from ingredient
                sourcing to production.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold text-[#134C28] mb-2">Community</h4>
              <p className="text-gray-600">
                We support our local community by sourcing from local suppliers and creating jobs
                that benefit the environment and society.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
