import React, { useEffect, useState } from "react";
import { calculateTimer } from "../helper/Timer";
import Controls from "./Controls";
import EditableInput from "./EditableInput";
import { Calendar3 } from "./icons/Calendar3";

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
        <span className='calendar-icon'>
          <Calendar3 size='32' color='white' />
        </span>
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
          setEventName={setEventName}
        />
      </div>
    </div>
  );
};

export default Stopwatch;
