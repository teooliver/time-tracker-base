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
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButton = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 1000);
    setIntervalId(interval);
    setIsPlaying(true);
  };
  const handleStopButton = () => {
    clearInterval(intervalId);
    createEvent({ event: eventName, time: timeInSeconds });
    setIsPlaying(false);
  };
  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };

  return (
    <div className='Controls'>
      {isPlaying ? (
        <button onClick={handleStopButton}>Stop</button>
      ) : (
        <button onClick={handlePlayButton}>Play</button>
      )}
      <button onClick={handleResetButton}>Reset</button>
    </div>
  );
};

export default Controls;
