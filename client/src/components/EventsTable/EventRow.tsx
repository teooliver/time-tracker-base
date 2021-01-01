import React, { FC, useState } from "react";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { ITask } from "../../interfaces/task";
import { useMutation, useQueryClient } from "react-query";
import { deleteTask } from "../../utils/api-client";
import { calculateTimer } from "../../helper/Timer";
import { ThreeDotsVertical } from "../icons/ThreeDotsVertical";
import DatePicker from "react-datepicker";

interface Props {
  task: ITask;
}

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
};

const EventRow: FC<Props> = ({ task }) => {
  const queryClient = useQueryClient();

  const deletePostMutation = useMutation(deleteTask, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("tasks");
    },
  });

  const [hours, minutes, seconds] = calculateTimer(task.timeInSeconds!);

  const [startDate, setStartDate] = useState(
    task.initialTime ? new Date(task.initialTime) : null
  );
  const [endDate, setEndDate] = useState(
    task.endTime ? new Date(task.endTime) : null
  );

  return (
    <>
      <li className='list-item'>
        <span> {task.name}</span>
        <div>
          <span className='date-picker'>
            <DatePicker
              selected={startDate}
              // @ts-ignore
              onChange={(date) => setStartDate(date)}
              timeInputLabel='Time:'
              // dateFormat='MM/dd/yyyy h:mm aa'
              dateFormat='h:mm aa'
              showTimeInput
            />
          </span>
          <span className='date-picker'>
            <DatePicker
              selected={endDate}
              // @ts-ignore
              onChange={(date) => setEndDate(date)}
              timeInputLabel='Time:'
              dateFormat='h:mm aa'
              showTimeInput
            />
          </span>
          <span>
            {hours}:{minutes}:{seconds}
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
