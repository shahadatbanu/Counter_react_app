import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function decementHandler() {
    setCount(count - 1);
  }
  function incrementHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="flex justify-center w-[100vw] h-[100vh] flex-col items-center gap-10 bg-[lightPink]">
      <h1 className="text-[white] font-medium text-2xl">
        Increment && Decrement
      </h1>
      <div className="bg-[skyBlue] flex  justify-center gap-12 py-3 rounded-sm text-25px">
        <button
          onClick={decementHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          -
        </button>
        <div className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          {count}
        </div>
        <button
          onClick={incrementHandler}
          className=" text-center w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>
      <button
        onClick={resetHandler}
        className="text-center py-2 px-5 rounded-sm  bg-[white]  text-5xl text-sm"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
