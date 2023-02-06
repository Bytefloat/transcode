import Image from "next/image";
import Link from "next/link";
import Github from "../components/GitHub";

export default function Header() {
  return (
    <header className="mt-5 w-full items-center justify-between px-2 pb-7 text-center sm:px-4 md:flex">
      <Link href="/" className="mb-10 flex justify-center space-x-3 md:mb-0">
        <h1 className="ml-2 text-2xl font-bold tracking-tight sm:text-4xl">
          Transcode
        </h1>
      </Link>
      <div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            className="flex items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm transition-colors hover:bg-gray-100"
            href="https://github.com/bytefloat/transcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>Star on GitHub</p>
          </a>
        </div>
      </div>
    </header>
  );
}
