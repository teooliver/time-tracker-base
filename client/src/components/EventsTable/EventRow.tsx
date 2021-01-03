import React, { FC } from "react";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { IDbTask } from "../../interfaces/task";
import { useMutation, useQueryClient } from "react-query";
import { deleteTask, updateTask } from "../../utils/api-client";
import { calculateTimer } from "../../helper/Timer";
import { ThreeDotsVertical } from "../icons/ThreeDotsVertical";
import DatePicker from "react-datepicker";
import CustomDatePickerInput from "./CustomDatePickerInput";

interface Props {
  task: IDbTask;
}

const EventRow: FC<Props> = ({ task }) => {
  const queryClient = useQueryClient();

  const deletePostMutation = useMutation(deleteTask, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("tasks");
    },
  });

  const updateTaskMutation = useMutation(updateTask, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("tasks");
    },
  });

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
        <span> {task.name}</span>
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
