import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Melos",
  description: "Terms and conditions for Melos Nutritional Consultancy & Therapy services.",
};

export default function TermsPage() {
  return (
    <div className="py-32 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-serif mb-12">Terms & Conditions</h1>
      
      <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
        <section>
          <h2 className="text-2xl font-serif text-primary mb-4">1. Introduction</h2>
          <p>
            Welcome to Melos Nutritional Consultancy & Therapy. By accessing our services, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-primary mb-4">2. Nature of Service</h2>
          <p>
            Melos provides nutritional consultancy and personalized meal planning services. Our goal is to support your health through structured, evidence-informed nutrition.
          </p>
        </section>

        <section className="bg-secondary p-8 rounded-[2rem] border border-accent">
          <h2 className="text-2xl font-serif text-primary mb-4 italic">3. Medical Disclaimer</h2>
          <p className="font-medium text-primary/80">
            <strong>IMPORTANT:</strong> The services provided by Melos are not a substitute for professional medical advice, diagnosis, or treatment. 
          </p>
          <p className="mt-4">
            All measurements taken during our sessions,including but not limited to body composition, blood pressure, and fasting blood sugar (FBS),are used solely for the purpose of <strong>knowing the person</strong> and tailoring a personalized nutrition plan. 
          </p>
          <p className="mt-4">
            These measurements and the resulting plans are <strong>not medical decisions</strong> and should not be treated as such. We do not provide clinical diagnoses. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-primary mb-4">4. Client Responsibility</h2>
          <p>
            It is the client's responsibility to disclose all known health conditions, allergies, and medications. You are encouraged to consult with your healthcare provider before implementing any significant changes to your diet or lifestyle.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-primary mb-4">5. Practical Requirements</h2>
          <p>
            To follow our meal plans accurately, we recommend the use of a kitchen scale. Melos can provide guidance or the equipment itself if needed, but accuracy in measurements (grams) is essential for the effectiveness of the plan.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-primary mb-4">6. Changes to Terms</h2>
          <p>
            Melos reserves the right to modify these terms at any time. Continued use of our services after changes are posted constitutes acceptance of the new terms.
          </p>
        </section>
      </div>
    </div>
  );
}
