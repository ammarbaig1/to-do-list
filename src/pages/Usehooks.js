import { useState, useEffect } from "react";

const Usehooks = () => {
  const [count, setCount] = useState(0);
  const [cal, setCal] = useState(0);

  useEffect(() => {
    setCal(() => count * 2);
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
      <div>
        <h1 className="text-4xl">You cliked {count} times</h1>
      </div>
      <div>
        <h1 className="text-4xl">You cal {cal} times</h1>
      </div>
      <button
        className="bg-gray-500 p-2"
        onClick={() => setCount((count) => count + 1)}
      >
        clicked me
      </button>
    </>
  );
};

export default Usehooks;
