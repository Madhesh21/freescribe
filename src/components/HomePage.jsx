import React from 'react'

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 justify-center p-4 text-center gap-3 sm:gap-4 md:gap-5 pb-20">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Free<span className="text-blue-400 bold">Scribe</span>
      </h1>
      <h3 className="font-medium md:text-lg">
        Record <span className="text-blue-400">&rarr;</span> Transcribe{" "}
        <span className="text-blue-400">&rarr;</span> Translate{" "}
        <span className="text-blue-400">&rarr;</span>
      </h3>
      <button className="flex items-center justify-between gap-4 mx-auto w-72 max-w-full my-4 text-base specialBtn px-4 py-2 rounded-xl">
        <p className='text-blue-400'>Record</p>
        <i className="fa-solid fa-microphone"></i>
      </button>
      <p className="text-base">
        Or
        <label className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200">
          {" "}
          Upload
          <input className="hidden" type="file" accept=".mp3,.wave" />
        </label>{" "}
        a mp3 file.
      </p>
      <p className="text-slate-500 italic">Free now free forever</p>
    </main>
  );
}
