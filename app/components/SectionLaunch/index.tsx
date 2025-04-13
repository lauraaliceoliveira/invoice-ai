import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemLaunch } from "./ItemLaunch";

const items = [
  {
    number: "5,000+",
    title: "Invoices automated",
    description: "Join thousands of businesses automating invoices with AI.",
  },
  {
    number: "95%",
    title: "Time saved",
    description: "Save hours of manual work with smart billing workflows.",
  },
  {
    number: "8k",
    title: "Global users",
    description: "Used by professionals across 40+ countries and growing.",
  },
  {
    number: "300+",
    title: "Positive reviews",
    description:
      "Loved by startups and enterprises for its simplicity and power.",
  },
];

export function SectionLaunch() {
  return (
    <section className="py-16 xl:py-24">
      <GridContainer>
        <div className="w-full max-w-3xl mb-16">
          <span className="block font-semibold text-blue-600 mb-3">
            Launch smarter
          </span>
          <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 -tracking-[0.72px] mb-5">
            Simplify your invoicing with the power of AI
          </h2>
          <p className="text-lg/relaxed xl:text-xl/6 text-gray-600">
            We’ve built the infrastructure so you can focus on growth —
            streamline your billing and scale effortlessly with Invoice AI.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row xl:flex-row gap-12 lg:gap-0 xl:gap-0 justify-between items-center">
          <div className="w-full max-w-xl grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-y-8 xl:gap-y-16 gap-x-8">
            {items.map((item, index) => (
              <ItemLaunch
                key={index}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div>
            <Image
              src="/image.png"
              width={560}
              height={560}
              alt="image-launch"
              className="max-h-60 lg:max-h-[360px] xl:max-h-[560px] object-cover"
            />
          </div>
        </div>
      </GridContainer>
    </section>
  );
}
