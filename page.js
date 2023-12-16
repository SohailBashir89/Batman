"use client"
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const personList = ['Apple', 'Banana', 'Citrus', 'Dragon Fruit', 'Egg plant', 'Fig', 'Grapes', 'ham burger'];
  const [count, setCount] = useState(0);

  const handlePrevious = () => {
    setCount((prevCount) => (prevCount - 1 + personList.length) % personList.length);
  };

  const handleNext = () => {
    setCount((prevCount) => (prevCount + 1) % personList.length);
  };

  const personName = '';

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md mx-auto bg-green rounded-x5 overflow-hidden shadow-md p-8 mb-8">
        <div className="md:flex">
          <div>
            <div className="uppercase tracking-wide text-lg text-red-500 font-bold text-center">
              {personList[count]}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-md mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevious}
        >
          PREVIOUS
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNext}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}