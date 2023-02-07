import type { NextPage } from "next";
import Head from "next/head";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Translate from "@/components/Translate";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { slogan } from "@/lib/utils";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Transcode</title>
        <meta name="description" content={slogan} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center sm:mt-4">
        <motion.div
          className="flex w-full flex-col items-center justify-center px-5 xl:px-0"
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1 className="font-display mt-6 w-[1024px] bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]">
            <Balancer>
              Transcode With
              <span className="bg-co ml-4 animate-text bg-gradient-to-r from-blue-500 from-teal-500 via-purple-500 via-green-600 to-indigo-500 bg-clip-text text-transparent">
                OpenAI
              </span>
            </Balancer>
          </motion.h1>

          <motion.p
            className="mt-6 text-center text-gray-500 md:text-2xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>{slogan}</Balancer>
          </motion.p>

          <motion.div
            className="w-full max-w-5xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          ></motion.div>
        </motion.div>

        <Translate />

        <div className="mt-2">
          <a
            href="https://twitter.com/intent/tweet/?text=Transcode%20help%20you%20translate%20from%20and%20into%20any%20programming%20language.&url=https%3A%2F%2Ftranscode.byteflo.at/"
            target="_blank"
            className="inline-flex items-center px-5 py-2.5 text-center text-sm font-medium text-[#1da1f2] hover:opacity-80"
            rel="noreferrer"
          >
            <svg
              className="mr-2 -ml-1 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
              ></path>
            </svg>
            Share on Twitter
          </a>
        </div>

        <hr className="border-1 h-px bg-gray-700 dark:bg-gray-700" />
      </main>

      <Footer />
    </>
  );
};

export default Home;
