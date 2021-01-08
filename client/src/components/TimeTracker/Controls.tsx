import React, { FC, useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";
import { useCreateTask } from "../../hooks/useCreateTask";
import { PlayCircle } from "../icons/PlayCircle";
import { StopCircle } from "../icons/StopCircle";
import { XCircle } from "../icons/XCircle";

interface ControlsProps {
  setTimeInSeconds: Function;
  timeInSeconds: number;
  selectedProject: string;
}

const Controls: FC<ControlsProps> = ({
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
    setTask({ ...task, initialTime: new Date() });
  };
  const handleStopButton = () => {
    clearInterval(intervalId);
    setIsPlaying(false);
    let endTime = new Date();

    createTaskMutation.mutate({
      ...task,
      endTime: endTime,
      project: selectedProject,
    });
    setTask({ name: "" });
  };
  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
    setIsPlaying(false);
    setTask({ name: "" });
  };

  return (
    <div className='Controls'>
      {isPlaying ? (
        <button onClick={handleStopButton} className='play-btn'>
          <StopCircle size='32' className='stop-btn' />
        </button>
      ) : (
        <button onClick={handlePlayButton}>
          <PlayCircle size='32' className='play-btn' />
        </button>
      )}
      <button onClick={handleResetButton}>
        <XCircle size='32' className='reset-btn' />
      </button>
    </div>
  );
};

export default Controls;
