import React, { useState } from "react";
import Translation from "./Translation";
import Transcription from "./Transcription";

export default function Information(props) {
  const {output} = props
  const [tab, setTab] = useState("transcription");

  function handleCopy() {
    navigator.clipboard.writeText()
  }

  function handleDownload() {
    const element = document.createElement('a')
    const file = new Blob([], {type:'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = `FreeScribe_${new Date().toString()}.txt`
    document.body.appendChild(element)
    element.click()
  }
  return (
    <main className="flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 max-w-prose w-full mx-auto">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Your <span className="text-blue-400 bold">Transcription</span>
      </h1>
      <div className="grid grid-cols-2 sm:mx-auto bg-white  rounded-full overflow-hidden items-center">
        <button
          onClick={() => setTab("transcription")}
          className={
            "px-4 duration-200 py-1 " +
            (tab === "transcription"
              ? " bg-blue-300 text-white"
              : " text-blue-400 hover:text-blue-600")
          }
        >
          Transcription
        </button>
        <button
          onClick={() => setTab("translation")}
          className={
            "px-4 duration-200 py-1  " +
            (tab === "translation"
              ? " bg-blue-300 text-white"
              : " text-blue-400 hover:text-blue-600")
          }
        >
          Translation
        </button>
      </div>
      <div className="my-8 flex flex-col">
        {tab === "transcription" ? (
          <Transcription {...props} />
        ) : (
          <Translation {...props} />
        )}
      </div>
      <div className="flex items-center mx-auto gap-4">
        <button title="copy" className="bg-white text-blue-300 px-2 rounded aspect-square grid place-items-center hover:text-blue-500 duration-200">
          <i className="fa-solid fa-copy"></i>
        </button>
        <button title="download" className="bg-white text-blue-300 px-2 rounded aspect-square grid place-items-center hover:text-blue-500 duration-200">
          <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </main>
  );
}
