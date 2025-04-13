import { FiBarChart2, FiCheckCircle, FiClock, FiLink, FiShield, FiZap } from "react-icons/fi";
import { GridContainer } from "../GridContainer";
import { ItemFeature } from "./ItemFeature";

export function SectionFeatures() {
  return (
    <section className="py-16 xl:py-24">
      <GridContainer>
        <div className="text-center mb-16">
          <small className="block text-base text-blue-600 font-semibold mb-3">
            Features
          </small>
          <h2 className="text-center text-3xl xl:text-4xl text-gray-900 tracking-tighter[-0.72px] font-semibold mb-5">
            Smarter Invoicing Starts Here
          </h2>
          <p className="text-lg/relaxed xl:text-xl/6 text-gray-600 max-w-3xl mx-auto">
            Discover the AI-powered features that automate, simplify, and speed
            up your entire invoicing process — so your team can focus on growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-12 xl:gap-y-16 justify-items-center">
          <ItemFeature
            icon={<FiZap size={24} className="text-blue-500" />}
            title="Automated Data Extraction"
            description="Use AI to instantly capture and organize invoice data from PDFs, scans, and emails — no manual entry required."
          />

          <ItemFeature
            icon={<FiCheckCircle size={24} className="text-blue-500" />}
            title="Smart Approval Flows"
            description="Route invoices to the right people, set custom rules, and keep your approval process fast and compliant."
          />

          <ItemFeature
            icon={<FiBarChart2 size={24} className="text-blue-500" />}
            title="Real-Time Financial Insights"
            description="Track invoice statuses, cash flow, and trends with intelligent dashboards that update as fast as you move."
          />

          <ItemFeature
            icon={<FiLink size={24} className="text-blue-500" />}
            title="Seamless Integrations"
            description="Connect with your ERP, CRM, or accounting tools in just a few clicks — no dev team needed."
          />

          <ItemFeature
            icon={<FiShield size={24} className="text-blue-500" />}
            title="AI-Powered Fraud Detection"
            description="Detect duplicates, non-compliant charges, and suspicious vendors automatically before payments go out."
          />

          <ItemFeature
            icon={<FiClock size={24} className="text-blue-500" />}
            title="Accelerated Payments"
            description="Automate vendor communication and schedule payments to keep your partners happy and your cash flow healthy."
          />
        </div>
      </GridContainer>
    </section>
  );
}
