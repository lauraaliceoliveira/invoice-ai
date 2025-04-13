import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemFeature } from "../SectionFeatures/ItemFeature";
import { FiBarChart2, FiClock, FiCpu, FiZap } from "react-icons/fi";
import { PiCpuLight } from "react-icons/pi";

export function SectionWhyInvoiceAI() {
  return (
    <section className="pt-16 xl:pt-24">
      <GridContainer>
        <div className="text-center mb-12 mxl:b-16">
          
          <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 mt-4 mb-6">
            Why Choose Invoice AI?
          </h2>
          <span className="inline-block py-1 px-3 mb-6 bg-blue-50 rounded-2xl text-sm/snug font-medium text-blue-600">
            The smarter way to handle invoicing
          </span>
          <p className="mx-auto text-lg/relaxed xl:text-xl/normal text-gray-600 max-w-3xl">
            Discover how Invoice AI can transform your financial workflow with
            speed, accuracy, and intelligent automation.
          </p>
        </div>
        <div className="relative w-full max-w-full h-auto xl:max-w-[888px] xl:h-[561px] mx-auto mb-12 xl:mb-24">
          <Image
            src="/screen-mockup.svg"
            alt="macbook"
            width={768}
            height={512}
            className="hidden xl:block absolute -top-[15px] -right-[18px] mx-auto"
          />
          <Image
            src="/iphone-mockup.svg"
            alt="iphone"
            width={244}
            height={497}
            className="hidden xl:block absolute bottom-0 left-0 mx-auto"
          />

          <Image
            src="/iphone-mobile.svg"
            alt="iphone mobile"
            width={375}
            height={360}
            className="block mx-auto xl:hidden bottom-0 left-0"
          />
        </div>
        <div className="flex flex-col items-center lg:flex-row xl:flex-row gap-10 xl:gap-0 justify-between">
          <ItemFeature
            icon={<FiCpu size={24} className="text-blue-500" />}
            title="AI-Powered Automation"
            description="Say goodbye to manual entry. Our AI scans, processes, and organizes invoices with lightning speed and near-perfect accuracy."
            isBtn
          />
          <ItemFeature
            icon={<FiBarChart2 size={24} className="text-blue-500" />}
            title="Real-Time Financial Insights"
            description="Visualize your financial health with live dashboards and auto-generated reports — no spreadsheets needed."
            isBtn
          />
          <ItemFeature
            icon={<FiZap size={24} className="text-blue-500" />}
            title="Faster Approvals, Happier Clients"
            description="Send, receive, and approve invoices in minutes. Improve your cash flow and impress your partners."
            isBtn
          />
        </div>
        <hr className="border-gray-200 mt-16 xl:mt-24" />
      </GridContainer>
    </section>
  );
}
