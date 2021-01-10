import React, { FC } from "react";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import { IDbTask } from "../../../interfaces/task";
import { calculateTimer } from "../../../utils/timer";
import { ThreeDotsVertical } from "../../icons/ThreeDotsVertical";
import DatePicker from "react-datepicker";
import CustomDatePickerInput from "./CustomDatePickerInput";
import { useDeleteTask } from "../../../hooks/useDeleteTask";
import { useUpdateTask } from "../../../hooks/useUpdateTask";
import "@reach/menu-button/styles.css";

interface Props {
  task: IDbTask;
}

const EventRow: FC<Props> = ({ task }) => {
  const deletePostMutation = useDeleteTask();

  const updateTaskMutation = useUpdateTask();

  const endTime = new Date(task.endTime!).getTime();
  const initialTime = new Date(task.initialTime!).getTime();

  const timeInSeconds: number | null = Math.round(
    (endTime - initialTime) / 1000
  );
  const [hours, minutes, seconds] = calculateTimer(timeInSeconds);

  const handleStartDateChange = (date: Date) => {
    // TODO: DEBOUNCE MUTATE
    updateTaskMutation.mutate({ ...task, initialTime: date });
  };

  const handleEndDateChange = (date: Date) => {
    // TODO: DEBOUNCE MUTATE
    updateTaskMutation.mutate({ ...task, endTime: date });
  };

  return (
    <>
      <li className='list-item'>
        <div>
          <span> {task.name}</span>
          <span className='project'>{task.project}</span>
        </div>
        <div className='rigth-side'>
          <span className='date-picker'>
            <DatePicker
              selected={task.initialTime ? new Date(task.initialTime) : null}
              // @ts-ignore
              onChange={(date) => handleStartDateChange(date)}
              timeInputLabel='Time:'
              // dateFormat='MM/dd/yyyy h:mm aa'
              dateFormat='h:mm aa'
              showTimeInput
              customInput={<CustomDatePickerInput />}
            />
          </span>
          <span>-</span>
          <span className='date-picker'>
            <DatePicker
              selected={task.endTime ? new Date(task.endTime) : null}
              // @ts-ignore
              onChange={(date) => handleEndDateChange(date)}
              timeInputLabel='Time:'
              dateFormat='h:mm aa'
              showTimeInput
              customInput={<CustomDatePickerInput />}
            />
          </span>
          <span className='total'>
            {hours}:{minutes}:{seconds}
          </span>
          <span className='menu'>
            <Menu>
              <MenuButton>
                <ThreeDotsVertical />
              </MenuButton>
              <MenuList>
                <MenuItem onSelect={() => deletePostMutation.mutate(task._id!)}>
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          </span>
        </div>
      </li>
    </>
  );
};

export default EventRow;
