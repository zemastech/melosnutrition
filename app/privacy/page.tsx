import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Melos",
  description: "Privacy policy for Melos Nutritional Consultancy & Therapy regarding client data protection.",
};

export default function PrivacyPage() {
  return (
    <div className="py-32 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-serif mb-12">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
        <section>
          <h2 className="text-2xl font-serif text-primary mb-4">1. Data Collection</h2>
          <p>
            At Melos, we collect information necessary to provide you with the best possible nutritional guidance. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal identification (Name, Contact Information).</li>
            <li>Physical measurements (Weight, Height, Body Composition, Blood Pressure).</li>
            <li>Health history and dietary preferences.</li>
            <li>Lifestyle information (Activity levels, Sleep patterns).</li>
          </ul>
        </section>

        <section className="bg-secondary p-8 rounded-[2rem] border border-accent">
          <h2 className="text-2xl font-serif text-primary mb-4 italic">2. Data Sharing & Security</h2>
          <p className="font-medium text-primary/80">
            Your privacy is our priority. All data collected about the client,including all physical and health measurements,is strictly confidential.
          </p>
          <p className="mt-4">
            <strong>We do not share your data</strong> with third parties for marketing, clinical research, or any other purposes without your explicit, written consent. Your measurements and personalized plans are used exclusively for your own progress monitoring and plan adjustments within Melos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-primary mb-4">3. Use of Information</h2>
          <p>
            The information collected is used solely to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Perform a full nutrition assessment.</li>
            <li>Design and customize your meal plan.</li>
            <li>Monitor your progress and adjust plans as needed.</li>
            <li>Communicate with you regarding your sessions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-primary mb-4">4. Data Retention</h2>
          <p>
            We retain your data only for as long as necessary to provide our services and fulfill our professional obligations to you. You may request the deletion of your personal records at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-primary mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how your data is handled, please reach out via our official contact channels.
          </p>
        </section>
      </div>
    </div>
  );
}
