import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { AreasCtas } from "./AreasCtas";

export function SectionHero() {
  return (
    <section className="py-16 xl:pt-24 xl:pb-0">
      <GridContainer>
        <div className="text-center">
          <h1 className="text-4xl xl:text-6xl font-semibold text-gray-900 mt-4 mb-6">
            Smarter Invoicing with AI
          </h1>
          <p className="text-lg/relaxed xl:text-xl/6 text-gray-600 max-w-3xl mx-auto mb-12">
            Say goodbye to manual entry and processing delays. Invoice AI uses
            intelligent automation to streamline your entire invoicing workflow.
          </p>
          <AreasCtas />
        </div>
        <Image
          src="/macbook.svg"
          width={1216}
          height={480}
          alt="mac"
          className="hidden md:block xl:block mx-auto"
        />

        <Image
          src="/macbook-mobile.svg"
          width={343}
          height={280}
          alt="mac mobile"
          className="block md:hidden xl:hidden mx-auto"
        />
        <hr className="hidden md:block xl:block border-gray-200" />
      </GridContainer>
    </section>
  );
}
