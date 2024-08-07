import React from 'react'

export default function FileDisplay(props) {

  const{file,audioStream,handleAudioReset} = props

  return (
    <main className="flex flex-col flex-1 justify-center p-4 text-center gap-3 sm:gap-4 pb-20 w-72 sm:w-96 max-w-full mx-auto">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Your <span className="text-blue-400 bold">File</span>
      </h1>
      <div className="flex flex-col text-left my-4">
        <h3 className="font-semibold">Name</h3>
        <p className="truncate">
          {file ? file?.name : "Custom audio"}
        </p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handleAudioReset}
          className="text-slate-400 hover:text-blue-600 duration-200"
        >
          Reset
        </button>
        <button className="specialBtn px-3 py-2 rounded-lg text-blue-400 flex items-center gap-2 font-medium">
          <p>Transcribe</p>
          <i className="fa-solid fa-pen-nib"></i>
        </button>
      </div>
    </main>
  );
}
