import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section 
    style={{
        backgroundImage: "url('/images/oval.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find answers to common questions about our products and services.
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 bg-white/5 rounded-lg px-3">
              <AccordionTrigger className="text-left font-medium">How do I create an account?</AccordionTrigger>
              <AccordionContent className="text-gray-500">
                To create an account, click on the &quot;Sign Up&quot; button in the top right corner of our website. Fill in your
                details in the registration form and follow the instructions to complete the process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-white/10 bg-white/5 rounded-lg px-3">
              <AccordionTrigger className="text-left font-medium">What payment methods do you accept?</AccordionTrigger>
              <AccordionContent className="text-gray-500">
                We accept all major credit cards including Visa, Mastercard, and American Express. We also support
                payments through PayPal and bank transfers for certain plans.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-white/10 bg-white/5 rounded-lg px-3">
              <AccordionTrigger className="text-left font-medium">
                Can I cancel my subscription at any time?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500">
                Yes, you can cancel your subscription at any time through your account settings. There are no
                cancellation fees, and youll continue to have access until the end of your billing period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-white/10 bg-white/5 rounded-lg px-3">
              <AccordionTrigger className="text-left font-medium">How can I contact customer support?</AccordionTrigger>
              <AccordionContent className="text-gray-500">
                Our customer support team is available 24/7. You can reach us through the contact form on our website,
                by email at support@example.com, or by phone at +1 (555) 123-4567.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-white/10 bg-white/5 rounded-lg px-3">
              <AccordionTrigger className="text-left font-medium">Do you offer refunds?</AccordionTrigger>
              <AccordionContent className="text-gray-500">
                Yes, we offer a 30-day money-back guarantee for all our plans. If youre not satisfied with our service,
                you can request a full refund within 30 days of your purchase.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}