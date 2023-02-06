# [Transcode](https://transcode.byteflo.at)

Transcode is a web app that uses OpenAI's GPT-3 API to translate code from one language to another. It's a fun way to learn about different programming languages and how they work.

[![LICENSE](https://img.shields.io/badge/License-Anti%20996-blue.svg?style=flat-square)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
[![LICENSE](https://img.shields.io/badge/License-Apache--2.0-green.svg?style=flat-square)](LICENSE-APACHE)
[![996.icu](https://img.shields.io/badge/Link-996.icu-red.svg?style=flat-square)](https://996.icu)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()

## Supported languages

<p align="left">
  <img src="https://img.shields.io/badge/-Typescript-black.svg?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/-Python-black.svg?style=flat-square&logo=python" />
  <img src="https://img.shields.io/badge/-C++-black.svg?style=flat-square&logo=c%2B%2B" />
  <img src="https://img.shields.io/badge/-C%23-black.svg?style=flat-square&logo=c-sharp" />
  <img src="https://img.shields.io/badge/-Java-black.svg?style=flat-square&logo=java" />
  <img src="https://img.shields.io/badge/-Ruby-black.svg?style=flat-square&logo=ruby" />
  <img src="https://img.shields.io/badge/-Go-black.svg?style=flat-square&logo=go" />
  <img src="https://img.shields.io/badge/-Rust-black.svg?style=flat-square&logo=rust" />
  <img src="https://img.shields.io/badge/-Kotlin-black.svg?style=flat-square&logo=kotlin" />
  <img src="https://img.shields.io/badge/-Swift-black.svg?style=flat-square&logo=swift" />
  <img src="https://img.shields.io/badge/-PHP-black.svg?style=flat-square&logo=php" />
  <img src="https://img.shields.io/badge/-Perl-black.svg?style=flat-square&logo=perl" />
  <img src="https://img.shields.io/badge/-Scala-black.svg?style=flat-square&logo=scala" />
  <img src="https://img.shields.io/badge/-Haskell-black.svg?style=flat-square&logo=haskell" />
  <img src="https://img.shields.io/badge/-Lua-black.svg?style=flat-square&logo=lua" />
  <img src="https://img.shields.io/badge/-Clojure-black.svg?style=flat-square&logo=clojure" />
</p>

## How it works

Inspired by [teach-anything](https://github.com/lvwzhen/teach-anything) and [readpilot](https://github.com/forrestchang/readpilot)

Powerd by [OpenAI](https://openai.com/), [Next.js](https://nextjs.org/), [Vercel](https://vercel.com/) and [Tailwind CSS](https://tailwindcss.com/).

This project uses the [OpenAI GPT-3 API](https://openai.com/api/) (specifically, text-davinci-003) and [Vercel Edge functions](https://vercel.com/features/edge-functions) with streaming. It constructs a prompt based on the form and user input, sends it to the GPT-3 API via a Vercel Edge function, then streams the response back to the application.

## Running Locally

After cloning the repo, go to OpenAI to make an account and put your API key in a file called .env.

Then, run the application in the command line and it will be available at http://localhost:3000.

```bash
$ npm run dev
```

## License

The code in this repository, unless otherwise noted, is under the terms of both the [Anti 996](https://github.com/996icu/996.ICU/blob/master/LICENSE) License and the [Apache License (Version 2.0)]().
