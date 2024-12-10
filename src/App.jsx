import React, { useState } from "react";

function App() {
  const [swetafor, setSwetafor] = useState(0);

  function handleCLick() {
    setSwetafor((value) => (value + 1) % 3);
  }
  return (
    <div>
      <div className="max-w-full mx-auto flex gap-10 justify-center  rounded-2xl bg-blue-400 p-10 items-center">
        <div className="border w-[25%] shadow flex flex-col gap-2 h-60 p-3">
          <div
            className={`${swetafor == 0 ? "bg-red-500" : "bg-transparent"
              } w-[50%] ml-[25%] h-[80px] rounded-lg flex items-center justify-center`}
          >
          </div>
          <div
            className={`${swetafor == 1 ? "bg-yellow-500" : "bg-transparent"
              } w-[50%] ml-[25%] h-[80px] rounded-lg flex items-center justify-center`}
          >
          </div>
          <div
            className={`${swetafor == 2 ? "bg-green-500" : "bg-transparent"
              } w-[50%] ml-[25%] h-[80px] rounded-lg flex items-center justify-center`}
          >
          </div>
        </div>
        <button
          onClick={handleCLick}
          className="w-[100px] h-[40px] bg-slate-500 text-white hover:bg-slate-600 rounded-md"
        >
          Focus
        </button>
      </div>
    </div>
  );
}

export default App;
