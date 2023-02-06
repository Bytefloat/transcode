import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const handler = async (req: NextRequest) => {
  const { lang, code } = (await req.json()) as { lang: string; code: string };

  const prompt = `
  ##### Translate this code to ${lang}:
  
  ### code
  
  ${code}
  
  ### ${lang}`;

  if (!code) {
    return new Response("No code in the request", { status: 400 });
  }

  const payload = {
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["###"],
    stream: false,
  };

  const res = await fetch("https://api.openai.com/v1/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ msg: "OpenAI API error", data: [] }), {
      status: 500,
    });
  }

  const { choices } = await res.json();
  const { text } = choices[0];
  const results = text.trimStart().replace(/^Output: /, "");
  console.log(results);

  return new Response(JSON.stringify({ data: results }));
};

export default handler;
