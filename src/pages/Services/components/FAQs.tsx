import React from "react";
import { faqs } from "../../../Data/faqData";


const FAQs: React.FC = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-300">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-gray-900 p-4 rounded">
              <summary className="cursor-pointer font-semibold text-white">{faq.question}</summary>
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
