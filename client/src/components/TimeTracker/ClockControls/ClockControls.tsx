import { FC, useContext, useState } from 'react';
import { TaskContext } from '../../../context/TaskContext';
import { useCreateTask } from '../../../hooks/useCreateTask';
import { PlayCircle } from '../../icons/PlayCircle';
import { StopCircle } from '../../icons/StopCircle';
import { XCircle } from '../../icons/XCircle';
import { ISelectedProject } from '../StopWatch/Stopwatch';

interface ControlsProps {
  setTimeInSeconds: Function;
  timeInSeconds: number;
  selectedProject: ISelectedProject;
}

export const ClockControls: FC<ControlsProps> = ({
  setTimeInSeconds,
  timeInSeconds,
  selectedProject,
}) => {
  const [intervalId, setIntervalId] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { task, setTask } = useContext(TaskContext);
  const createTaskMutation = useCreateTask();

  const handlePlayButton = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 1000);
    setIntervalId(interval);
    setIsPlaying(true);
    setTask({ ...task, initial_time: new Date() });
  };
  const handleStopButton = () => {
    clearInterval(intervalId);
    setIsPlaying(false);
    let endTime = new Date();

    createTaskMutation.mutate({
      ...task,
      end_time: endTime,
      project: selectedProject.id,
    });
    setTask({ name: '' });
  };
  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
    setIsPlaying(false);
    setTask({ name: '' });
  };

  return (
    <div className='Controls'>
      {isPlaying ? (
        <button onClick={handleStopButton}>
          <StopCircle className='stop-btn' size='32' />
        </button>
      ) : (
        <button onClick={handlePlayButton}>
          <PlayCircle className='play-btn' size='32' />
        </button>
      )}
      <button onClick={handleResetButton}>
        <XCircle className='reset-btn' size='32' />
      </button>
    </div>
  );
};
