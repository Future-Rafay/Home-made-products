import { FaStar } from "react-icons/fa";
import { Card } from "@/components/ui/card"; // assuming you're using shadcn/ui for cards

interface Review {
  name: string;
  rating: number;
  review: string;
  date: string;
}

const reviewsData: Review[] = [
  {
    name: "Ahmed Ali",
    rating: 5,
    review: "Amazing quality! The products are top-notch and pure. Highly recommended.",
    date: "January 5, 2025",
  },
  {
    name: "Sara Khan",
    rating: 4,
    review: "Good experience, the pickup was smooth, and the products were fresh.",
    date: "December 20, 2024",
  },
  {
    name: "Zain Baig",
    rating: 5,
    review: "The best homemade products I've ever bought! Will definitely order again.",
    date: "November 15, 2024",
  },
];

export default function Reviews() {
  return (
    <section 
    className="bg-[#F9FAFB] py-16"
    >
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#134C28]">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <Card
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <FaStar key={i + review.rating} className="text-gray-300" />
                ))}
              </div>
              <p className="text-lg font-semibold text-[#134C28]">{review.name}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
              <p className="mt-4 text-gray-600">{review.review}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
