import Image from "next/image";
import { SectionHero } from "./components/SectionHero";
import { SectionCompanies } from "./components/SectionCompanies";
import { SectionFeatures } from "./components/SectionFeatures";
import { SectionTestimonial } from "./components/SectionTestimonial";
import { SectionWhyInvoiceAI } from "./components/SectionWhyInvoiceAI";
import { SectionQuestions } from "./components/SectionQuestions";
import { SectionLaunch } from "./components/SectionLaunch";
import { SectionTrial } from "./components/SectionTrial";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
      <SectionWhyInvoiceAI />
      <SectionLaunch />
      <SectionTestimonial />
      <SectionQuestions />
      <SectionTrial />
    </>
  );
}
