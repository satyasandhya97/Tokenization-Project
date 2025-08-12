import { useState } from "react";

export default function TokenizerUI() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const handleSubmit = (input: string) => {
    if (mode === "encode") {
      const encoded = input.split("").map((char) => char.codePointAt(0));
      setOutputText(encoded.join(" "));
    } else if (mode === "decode") {
      const decoded = input.split(" ").map((char) => String.fromCodePoint(parseInt(char)));
      setOutputText(decoded.join(""));
    }
  };

  const clearAll = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-6 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 via-teal-400 to-green-500 bg-clip-text text-transparent">
          Smart Tokenizations Converter
        </h1>
        <p className="text-gray-400 mt-3 text-lg md:text-xl font-light">
          Transform Your Text: <span className="text-teal-400">Encode</span> ↔ <span className="text-pink-400">Decode</span>
        </p>
      </header>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-2xl shadow-xl w-full max-w-4xl">
        <div className="flex gap-4 mb-6 justify-center">
          <button
            onClick={() => setMode("encode")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${mode === "encode"
              ? "bg-teal-500 text-white"
              : "bg-gray-700 hover:bg-teal-600"
              }`}
          >
            Encode
          </button>
          <button
            onClick={() => setMode("decode")}
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

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={() => handleSubmit(inputText)}
            className="px-5 py-2 rounded-lg font-semibold bg-teal-500 hover:bg-teal-400 transition-all"
          >
            Convert
          </button>
          <button
            onClick={clearAll}
            className="px-5 py-2 rounded-lg font-semibold bg-gray-600 hover:bg-gray-500 transition-all"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
