import React, { useEffect, useState } from "react";
import { calculateTimer } from "../../utils/timer";
import Controls from "./Controls";
import EditableInput from "./EditableInput";
import { Calendar3 } from "../icons/Calendar3";

const Stopwatch = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <div className='Stopwatch'>
      <EditableInput />
      <div className='clock-controls'>
        <section>
          <select name='Projects' id='projects'>
            <option value='proj1'>Proj1</option>
            <option value='proj2'>Proj2</option>
            <option value='proj3'>Proj3</option>
            <option value='proj4'>Proj4</option>
          </select>
        </section>
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
        />
      </div>
    </div>
  );
};

export default Stopwatch;
