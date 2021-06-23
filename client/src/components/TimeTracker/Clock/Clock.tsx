import { FC } from 'react';

interface Props {
  timerArray: (string | number)[];
}

const Clock: FC<Props> = ({ timerArray }) => {
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

export default Clock;
