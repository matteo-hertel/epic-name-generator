import Head from "next/head";
import { Block, Button, Text, Layout } from "ui-tailwind";
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
      <Layout align="center" justify="center">
        <Text size="5xl" align="center">
          Epic Name Generator
        </Text>
        <Block margin={10} />
        <Button onClick={generateName}>🪄</Button>
        <Block margin={6} />
        <Text size="4xl" align="center">
          {name}
        </Text>
      </Layout>
    </div>
  );
}
