import { FC } from 'react';

export interface ClockProps {
  timerArray: (string | number)[];
}

export const Clock: FC<ClockProps> = ({ timerArray }) => {
  return (
    <section className='clock'>
      <p className='time-text'>{timerArray[0]}</p>
      <span>:</span>
      <p className='time-text'>{timerArray[1]}</p>
      <span>:</span>
      <p className='time-text'>{timerArray[2]}</p>
    </section>
  );
};
