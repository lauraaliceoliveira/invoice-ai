"use client";

import { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

interface QuestionProps {
  title: string;
  response: string;
}

export function Question({ title, response }: QuestionProps) {
  const [open, setOpen] = useState(false);

  function handleOpenQuestion() {
    setOpen(!open);
  }

  return (
    <div className="w-full first:pt-0 last:pb-0 pt-6 pb-8">
      <button
        onClick={handleOpenQuestion}
        className="w-full flex items-center justify-between text-left cursor-pointer"
      >
        <h3 className="text-gray-900 text-lg/normal font-semibold">{title}</h3>
        {open ? (
          <FiMinusCircle size={24} className="text-blue-500" />
        ) : (
          <FiPlusCircle size={24} className="text-blue-500" />
        )}
      </button>

      {open && (
        <div>
          <p className="mt-2 text-gray-600 leading-normal pr-12">{response}</p>
        </div>
      )}
    </div>
  );
}
