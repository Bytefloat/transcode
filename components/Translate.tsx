import {
  DocumentDuplicateIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ShareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import DropDown, { VibeType } from "@/components/DropDown";
import { useState, ChangeEvent, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";
import LoadingDots from "../components/LoadingDots";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

const Translate = () => {
  const [lang, setLang] = useState<VibeType>("Typescript");
  const [code, setCode] = useState("");
  const [translated, setTranslated] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const defaultCode = "Put your code here";
  const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false },
  );

  useEffect(() => {
    console.log(`Code changed: ${lang}`);
    generateTranslate();
  }, [lang, code]);

  const timerId = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);

    if (timerId.current) clearTimeout(timerId.current);

    timerId.current = setTimeout(() => {
      timerId.current = null;
      return generateTranslate(e);
    }, 1000);
  };

  const generateTranslate = async (e?: any) => {
    if (e) {
      e.preventDefault();
    }

    if (code === "") {
      return;
    }

    setTranslated("");
    setLoading(true);

    const response = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lang, code }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        console.log(responseJson);
        setTranslated(responseJson.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setLoading(false);
  };

  return (
    <div className="container mx-auto mt-4 px-0">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />
      <div className="flex flex-row">
        <div className="h top-32 z-10 w-full pb-4">
          <div
            className="rounded-lg border border-gray-200 bg-white
              shadow-sm drop-shadow-sm"
          >
            <div className="flex border-b border-gray-300">
              <div className="w-7/12">
                <nav className="flex flex-row rounded-tl-lg">
                  {/* Detect Language*/}
                  <span
                    className="inline-flex w-full items-center justify-between rounded-tl-lg py-3.5 px-3 text-xs font-semibold text-gray-700 transition-colors
                      duration-100 focus:outline-none
                      focus:ring-2
                      focus:ring-black lg:text-sm"
                  >
                    Detect Language
                  </span>
                </nav>
              </div>

              <div className="w-7/12">
                <nav className="flex flex-row rounded-tl-lg">
                  <DropDown
                    vibe={lang}
                    setVibe={(newLang) => setLang(newLang)}
                  />
                </nav>
              </div>
            </div>

            <div className="flex">
              <div className="w-6/12 border-r border-gray-200 p-4">
                <div className="h-40">
                  <div className="flex flex-row">
                    <textarea
                      value={code}
                      onChange={handleInputChange}
                      className="text-blak custom-scrollbar w-full h-40
                        resize-none text-base focus:outline-none
                        lg:text-sm"
                      spellCheck="false"
                      placeholder={defaultCode}
                    ></textarea>
                    {code && (
                      <button
                        className="mt-1 h-10
                          w-10 rounded-full transition-colors
                          duration-100 hover:bg-gray-100"
                        title="Clear"
                        onClick={(e) => setCode("")}
                      >
                        <XMarkIcon className="h-6 w-6 text-gray-400" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/*Output Container*/}
              <div className="w-6/12 rounded-br-lg bg-zinc-100 p-4">
                <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
                  <div className="h-40">
                    <div className="h-10 text-base text-black lg:text-sm">
                      {!loading && code && (
                        <CodeEditor
                          value={translated}
                          language={lang.toLowerCase()}
                          style={{
                            fontSize: 12,
                            fontFamily:
                              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                            backgroundColor: "#f4f4f5",
                          }}
                          data-color-mode="light"
                        />
                      )}
                      {loading && <LoadingDots color="black" style="large" />}
                    </div>
                  </div>
                </motion.div>

                {/*  Output Buttons*/}
                <div className="h-10">
                  <div className="flex flex-grow" x-show="sourceText.length">
                    <div className="grow">
                      <div className="float-right flex">
                        {code && (
                          <button
                            id="copy-translation"
                            className="mt-1 h-10
                              w-10 rounded-full transition-colors
                              duration-100 hover:bg-gray-200"
                            onClick={() => {
                              navigator.clipboard.writeText(code);
                              toast("Text copied to clipboard", {
                                icon: "✂️",
                              });
                            }}
                          >
                            <DocumentDuplicateIcon className="h-6 w-6 text-gray-600" />
                          </button>
                        )}

                        {code && (
                          <button
                            className="mt-1 h-10
                            w-10 rounded-full transition-colors
                            duration-100 hover:bg-gray-200"
                          >
                            <HandThumbUpIcon className="h-6 w-6 text-gray-600" />
                          </button>
                        )}

                        {code && (
                          <button
                            className="mt-1 h-10
                            w-10 rounded-full transition-colors
                            duration-100 hover:bg-gray-200"
                          >
                            <HandThumbDownIcon className="h-6 w-6 text-gray-600" />
                          </button>
                        )}

                        {code && (
                          <button
                            className="mt-1 h-10
                                w-10 rounded-full transition-colors
                                duration-100 hover:bg-gray-200"
                          >
                            <ShareIcon className="h-6 w-6	place-content-center content-around justify-around text-gray-600" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;
