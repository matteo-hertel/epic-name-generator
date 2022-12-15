import { uniqueNamesGenerator } from "unique-names-generator";
import { config } from "../utils/config";
import { useState } from "react";

export const Generator = () => {
  const [name, setName] = useState("Press the magic button");
  const generateName = () => setName(uniqueNamesGenerator(config));

  return (
    <div className="m-10 flex flex-col justify-center items-center">
      <button
        onClick={generateName}
        className="rounded-full bg-blue-200 m-4 p-4 font-medium text-gray-100 transition-all w-14 hover:bg-blue-400"
      >
        🪄
      </button>
      <h1 className="text-4xl text-red-600 font-medium">{name}</h1>
    </div>
  );
};
