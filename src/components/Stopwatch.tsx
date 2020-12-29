import React, { useEffect, useState } from "react";
import { calculateTimer } from "../helper/Timer";
import Controls from "./Controls";
import EditableInput from "./EditableInput";

const Stopwatch = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  const [eventName, setEventName] = useState("");

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <div className='Stopwatch'>
      <EditableInput eventName={eventName} setEventName={setEventName} />
      <div className='clock-controls'>
        <section className='clock'>
          <p className='time-text'>{timerArray[0]}</p>
          <span>:</span>
          <p className='time-text'>{timerArray[1]}</p>
          <span>:</span>
          <p className='time-text'>{timerArray[2]}</p>
        </section>
        <Controls
          setTimeInSeconds={setTimeInSeconds}
          timeInSeconds={timeInSeconds}
          eventName={eventName}
        />
      </div>
    </div>
  );
};

export default Stopwatch;
