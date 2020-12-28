import React, { FC, useState } from "react";

interface ControlsProps {
  setTimeInSeconds: Function;
}

const Controls: FC<ControlsProps> = ({ setTimeInSeconds }) => {
  const [intervalId, setIntervalId] = useState<number>(0);

  const handlePlayButton = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 1000);
    setIntervalId(interval);
  };
  const handleStopButton = () => {
    clearInterval(intervalId);
  };
  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  };

  return (
    <section className='Controls'>
      <button onClick={handlePlayButton}>Play</button>
      <button onClick={handleStopButton}>Stop</button>
      <button onClick={handleResetButton}>Reset</button>
    </section>
  );
};

export default Controls;
