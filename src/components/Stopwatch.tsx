import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState<number>(0);

  // let count = useRef<number>(0);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     count = +1;
  //   }, 100000);
  // }, []);

  return (
    <div>
      <h1>Current Count: {count}</h1>
    </div>
  );
};

export default Stopwatch;
