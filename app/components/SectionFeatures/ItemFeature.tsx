import { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

interface ItemFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  isBtn?: boolean;
}

export function ItemFeature({
  icon,
  title,
  description,
  isBtn = false,
}: ItemFeatureProps) {
  return (
    <div className="text-center w-full max-w-96">
      <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto border-8 border-blue-50 mb-5 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-gray-900 text-xl/6 font-medium mb-2">{title}</h3>
      <p className="text-gray-600 leading-6">{description}</p>

      {isBtn && (
        <a
          href="#"
          className="flex items-center justify-center mt-5 font-semibold text-blue-600 gap-2 hover:opacity-50 transition-opacity"
        >
          Learn more
          <FiArrowRight size={20} className="text-blue-600" />
        </a>
      )}
    </div>
  );
}
