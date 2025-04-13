import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function SectionCompanies() {
  return (
    <section className="pt-0 xl:pt-24">
      <GridContainer>
        <p className="text-center text-gray-600 font-medium mb-8">
          Over 1,200 companies trust Invoice AI to handle their billing.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:flex xl:flex-row items-center justify-between gap-y-4 gap-x-10 xl:gap-y-0 xl:gap-x-0 justify-items-center">
          <Image src="/google.svg" width={146} height={48} alt="google" />
          <Image src="/microsoft.svg" width={146} height={48} alt="microsoft" />
          <Image src="/aws.svg" width={146} height={48} alt="aws" />
          <Image src="/ibm.svg" width={146} height={48} alt="ibm" />
          <Image src="/oracle.svg" width={146} height={48} alt="oracle" />
          <Image src="/salesforce.svg" width={146} height={48} alt="salesforce" />
        </div>
        <hr className="mt-16 xl:mt-24 border-gray-200" />
      </GridContainer>
    </section>
  );
}
