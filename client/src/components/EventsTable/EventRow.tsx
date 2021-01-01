import React, { FC } from "react";
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

  return (
    <>
      <li className='list-item'>
        <span> {task.name}</span>
        <div>
          <span>{new Date(task.initialTime!).toLocaleDateString()} </span>
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
