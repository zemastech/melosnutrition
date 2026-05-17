import { Metadata } from "next";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ | Melos",
  description: "Frequently asked questions about Melos Nutritional Consultancy & Therapy services and personalized meal plans.",
};

export default function FaqPage() {
  return (
    <div className="pt-32">
      <Faq />
    </div>
  );
}
