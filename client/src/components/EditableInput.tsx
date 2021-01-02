import React, { FC, useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

interface EditableInputProps {
  // eventName: string;
  // setEventName: Function;
}

const EditableInput: FC<EditableInputProps> = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { task, setTask } = useContext(TaskContext);

  const onKeyUp = (event: any) => {
    if (event.charCode === 13) {
      setIsEditing(false);
    }
  };

  return (
    <div className='input-container'>
      {isEditing ? (
        <input
          className='event-name-input'
          type='text'
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          onSubmit={() => setIsEditing(false)}
          onKeyPress={onKeyUp}
        />
      ) : (
        <p className='event-name-input' onClick={() => setIsEditing(true)}>
          {task?.name ? task.name : "Add Event"}
        </p>
      )}
    </div>
  );
};

export default EditableInput;
