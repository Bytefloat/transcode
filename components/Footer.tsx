import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-5 w-full border-t border-gray-200 bg-white py-5 text-center">
      <div>
        <p className="text-gray-700">
          Powered by{" "}
          <a
            href="https://beta.openai.com/account"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline-offset-2 transition hover:underline"
          >
            OpenAI
          </a>
          {" + "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline-offset-2 transition hover:underline"
          >
            Vercel
          </a>
          {" + "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline-offset-2 transition hover:underline"
          >
            Next.js
          </a>
        </p>
        <p className="text-xs text-gray-500/50"> Made by Bytefloat Inc. </p>
      </div>
    </footer>
  );
}
