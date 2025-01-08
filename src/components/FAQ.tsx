import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "What is the delivery method?",
    answer: "We only offer pickup for our products. You can collect them from our location or arrange your own courier service.",
  },
  {
    question: "How can I contact you for more details?",
    answer: "You can contact us through the contact page, or email us at info@homemadeproducts.ch.",
  },
  {
    question: "Are your products organic?",
    answer: "Yes, all of our products are homemade and made with organic ingredients.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Currently, we only accept cash on pickup.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#134C28]">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white p-2 sm:p-4 md:p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <AccordionTrigger className="flex justify-between items-center cursor-pointer text-sm sm:text-lase md:text-lg font-semibold text-[#134C28] hover:text-[#9BB536]">
                <span>{faq.question}</span>
              
              </AccordionTrigger>
              <AccordionContent className="mt-4 text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
