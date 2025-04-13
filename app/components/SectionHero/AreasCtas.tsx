import { FiBookOpen } from "react-icons/fi";

export function AreasCtas() {
  return (
    <div className="flex flex-col-reverse sm:flex-row xl:flex-row items-center justify-center gap-3 mb-16">
      <button className="w-full sm:w-auto xl:w-auto flex items-center justify-center gap-3 py-4 px-7 border border-gray-300 rounded-lg text-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer">
        <FiBookOpen />
        Learn More
      </button>
      <button className="w-full sm:w-auto xl:w-auto py-4 px-7 rounded-lg text-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer">
        Request a Demo
      </button>
    </div>
  );
}
