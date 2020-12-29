import React, { FC, useContext, useState } from "react";
import { EventsContext } from "../context/EventsContext";
import { createEvent } from "../helper/Events";
import PlayCircle from "../icons/PlayCircle";
import StopCircle from "../icons/StopCircle";
import XCircle from "../icons/XCircle";

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

  const { setEvents } = useContext(EventsContext);

  const handlePlayButton = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 1000);
    setIntervalId(interval);
    setIsPlaying(true);
  };
  const handleStopButton = () => {
    clearInterval(intervalId);
    createEvent({ name: eventName, time: timeInSeconds });

    setEvents!((prevEvents) => [
      ...prevEvents,
      { name: eventName, time: timeInSeconds },
    ]);
    setIsPlaying(false);
  };
  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };

  return (
    <div className='Controls'>
      {isPlaying ? (
        <button onClick={handleStopButton}>
          <i>
            <StopCircle />
          </i>
        </button>
      ) : (
        <button onClick={handlePlayButton}>
          <i>
            <PlayCircle />
          </i>
        </button>
      )}
      <button onClick={handleResetButton}>
        <i>
          <XCircle />
        </i>
      </button>
    </div>
  );
};

export default Controls;
