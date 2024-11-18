"use client";
import { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleClick = (value: string): void => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = (): void => {
    try {
      // Using Function constructor for safer evaluation
      const calculatedResult = Function('"use strict";return (' + input + ')')();
      setResult(calculatedResult.toString());
    } catch {
      setResult("Error"); // No need to use the error variable
    }
  };

  const clearInput = (): void => {
    setInput("");
    setResult("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg mt-0">
      <div className="mb-4 text-center text-2xl font-bold">Dj-Calculator</div>
      <div className="mb-2 p-2 bg-white rounded shadow-sm">
        <div className="text-xl text-right">{input || "0"}</div>
        <div className="text-gray-500 text-sm text-right">{result}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map(
          (item) => (
            <button
              key={item}
              className="p-4 bg-blue-500 text-white rounded hover:bg-blue-700 font-bold"
              onClick={() =>
                item === "="
                  ? calculateResult()
                  : item === "C"
                  ? clearInput()
                  : handleClick(item)
              }
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
