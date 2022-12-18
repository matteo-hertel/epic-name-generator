import Head from "next/head";
import { Button } from "ui-tailwind";
import { uniqueNamesGenerator } from "unique-names-generator";
import { config } from "../utils/config";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Press the magic button");
  const generateName = () => setName(uniqueNamesGenerator(config));

  return (
    <div>
      <Head>
        <title>Epic Name Generator</title>
        <meta name="description" content="Generate epic names with magic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-10 flex flex-col justify-center items-center">
        <h1>Epic Name Generator</h1>
        <Button onClick={generateName} text="🪄" />
        <h2 className="text-4xl text-red-600 font-medium">{name}</h2>
      </div>
    </div>
  );
}
