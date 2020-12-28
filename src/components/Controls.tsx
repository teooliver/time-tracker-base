import React, { FC, useEffect, useState } from "react";
import { createEvent } from "../helper/Events";
import { ILapData } from "../interfaces/Laps";

interface ControlsProps {
  setTimeInSeconds: Function;
  eventName: string;
  timeInSeconds: number;
}

const Controls: FC<ControlsProps> = ({
  setTimeInSeconds,
  eventName,
  timeInSeconds,
}) => {
  const [intervalId, setIntervalId] = useState<number>(0);

  const handlePlayButton = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 1000);
    setIntervalId(interval);
  };
  const handleStopButton = () => {
    clearInterval(intervalId);
    createEvent({ event: eventName, time: timeInSeconds });
  };
  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };

  // useEffect(() => {
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <section className='Controls'>
      <button onClick={handlePlayButton}>Play</button>
      <button onClick={handleStopButton}>Stop</button>
      <button onClick={handleResetButton}>Reset</button>
    </section>
  );
};

export default Controls;
