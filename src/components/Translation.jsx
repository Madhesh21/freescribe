import React from "react";
import { LANGUAGES } from "../utils/presets";

export default function Translation(props) {
  const {
    textElement,
    translating,
    toLanguage,
    setToLanguage,
    generateTranslation
  } = props;

  return (
    <div className="flex flex-col gap-2 max-w-[400px] w-full mx-auto">
      {!translating && (
        <div className="flex flex-col gap-1 mb-4">
          <p className="text-xs sm:text-sm font-medium text-slate-500 mr-auto">
            To language
          </p>
          <div className="flex items-stretch gap-2">
            <select
              className="flex-1 p-2 outline-none bg-white focus:outline-none border border-solid border-transparent hover:border-blue-400 duration-200"
              value={toLanguage}
              onChange={(e) => setToLanguage(e.target.value)}
            >
              <option value={"Select Language"}>Select language</option>
              {Object.entries(LANGUAGES).map(([key, value]) => {
                return (
                  <option key={key} value={value}>
                    {key}
                  </option>
                );
              })}
            </select>
            <button onClick={generateTranslation} className="specialBtn px-3 py-2 rounded-lg text-blue-400 hover:text-blue-600 duration-200">
              Translate
            </button>
          </div>
        </div>
      )}

      {(textElement && !translating) && <p>{textElement}</p>}
      {translating && (
        <div className="grid place-items-center">
          <i className="fa-solid fa-spinner animate-spin"></i>
        </div>
      )}
    </div>
  );
}
