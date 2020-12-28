import React, { useEffect, useRef, useState } from "react";
import { calculateTimer } from "../helper/Timer";
import Controls from "./Controls";

const Stopwatch = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <>
      <section className='Stopwatch'>
        <p className='time-text'>{timerArray[0]}</p>
        <span>:</span>
        <p className='time-text'>{timerArray[1]}</p>
        <span>:</span>
        <p className='time-text'>{timerArray[2]}</p>
      </section>
      <Controls setTimeInSeconds={setTimeInSeconds} />
    </>
  );
};

export default Stopwatch;
