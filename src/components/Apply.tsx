import { ArrowLeft } from "lucide-react";

export default function Apply({setAppsubmit}: {setAppsubmit: (value: boolean) => void}) {
  const score = 68;
  const missing = ["Docker", "REST APIs", "System Design"];

  return (
    <div className="w-full h-screen  text-white flex justify-center items-center absolute top-0 left-0 bg-gray-500/30">
      <div className="mt-4 p-1 border max-w-lg mx-auto p-8 bg-[#1a1a2e] rounded-xl shadow-lg ">
      <h2 className="text-3xl font-bold mb-4 text-blue-300">
      Application Submitted
        </h2>
        <div>
            <span className="font-semibold text-teal-200">ATS Score:</span>
            <span className="ml-2 text-gray-300 font-bold">{score}%</span>
          </div>

      <p className="mt-2 font-semibold text-teal-200">Missing Keywords:</p>
      <ul className="list-roman ml-5 text-sm">
        {missing.map((k) => (
          <li key={k} className="ml-2 text-gray-300 font-bold">{k}</li>
        ))}
      </ul>
      <button
          className="mb-6 mt-8 mx-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition w-fit  flex gap-2"
          onClick={() => setAppsubmit(false)}
        >
          <ArrowLeft /> close
        </button>
    </div>
    </div>
  );
}
