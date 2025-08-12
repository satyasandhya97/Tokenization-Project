import { useState } from "react";

export default function TokenizerUI() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [mode, setMode] = useState("encode");




  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-6">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-100 tracking-wide">
          Smart Tokenizer
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Encode & Decode my text
        </p>
      </header>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-2xl shadow-xl w-full max-w-4xl">
        <div className="flex gap-4 mb-6 justify-center">
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${mode === "encode"
              ? "bg-teal-500 text-white"
              : "bg-gray-700 hover:bg-teal-600"
              }`}
          >
            Encode
          </button>
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${mode === "decode"
              ? "bg-pink-500 text-white"
              : "bg-gray-700 hover:bg-pink-600"
              }`}
          >
            Decode
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="mb-2 font-semibold text-gray-300">Input Text</h2>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full h-40 bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Type here..."
            />
          </div>
          <div>
            <h2 className="mb-2 font-semibold text-gray-300">Output</h2>
            <textarea
              value={outputText}
              readOnly
              className="w-full h-40 bg-gray-900 border border-gray-700 rounded-lg p-3 text-white"
              placeholder="Result..."
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="px-5 py-2 rounded-lg font-semibold bg-gray-600 hover:bg-gray-500 transition-all"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>


  );
}
