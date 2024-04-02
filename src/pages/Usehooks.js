import { useState, useEffect, useRef } from "react";

const Usehooks = () => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, []);
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>

      {/* <div>
        <h1 className="text-4xl">You cliked {count} times</h1>
      </div>
      <div>
        <h1 className="text-4xl">You cal times</h1>
      </div>
      <button className="bg-gray-500 p-2">clicked me</button> */}
    </>
  );
};

export default Usehooks;
