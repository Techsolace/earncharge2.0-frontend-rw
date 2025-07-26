"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { FaChevronDown } from "react-icons/fa";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I recharge my mobile using the app?",
    answer:
      "Log in with your mobile number or email, select 'Mobile Recharge' from the main menu, choose your operator, enter your mobile number, select a plan, and complete the payment using UPI, card, or wallet."
  },
  {
    question: "Can I earn commissions on recharges?",
    answer:
      "Yes, join our retailer program to earn commissions on every mobile, DTH, or bill payment transaction. Register as a retailer in the app and start earning instantly."
  },
  {
    question: "Is my payment information secure?",
    answer:
      "We use industry-standard encryption and secure payment gateways to ensure your financial data is protected during every transaction."
  },
  {
    question: "What happens if my recharge fails?",
    answer:
      "Check the transaction status in the 'Transaction History' section. If the amount was deducted, it will be refunded within 7 business days. Contact our 24/7 support team via the app for assistance."
  },
  {
    question: "Can I recharge for someone else?",
    answer:
      "Yes, enter the recipient’s mobile number, select the operator and plan, and complete the payment to recharge any mobile number."
  }
];

export default function FaqAccordion() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 bg-black text-white ubuntu-bold mt-10">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-4 text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-300">
          Your guide to seamless mobile recharges and bill payments.
        </p>
      </div>
      <Accordion.Root type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="border border-gray-800 rounded-lg bg-black-900/50 backdrop-blur-sm overflow-hidden"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger
                className={cn(
                  "flex-1 flex items-center justify-between p-6 font-semibold text-left text-white text-lg transition-all duration-300 hover:bg-black-800/50 focus:outline-none focus-visible:ring focus-visible:ring-neon-blue focus-visible:ring-opacity-75"
                )}
              >
                {faq.question}
                <FaChevronDown className="h-5 w-5 text-neon-blue transition-transform duration-300 ui-state-open:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-5 text-gray-300 text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="pt-3 border-t border-gray-800">{faq.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}