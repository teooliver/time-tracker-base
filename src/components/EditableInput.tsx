import React, { FC, FormEvent, useState } from "react";

interface EditableInputProps {
  eventName: string;
  setEventName: Function;
}

const EditableInput: FC<EditableInputProps> = ({ eventName, setEventName }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onKeyUp = (event: any) => {
    if (event.charCode === 13) {
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          className='event-name-input'
          type='text'
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          onSubmit={() => setIsEditing(false)}
          onKeyPress={onKeyUp}
        />
      ) : (
        <p className='event-name-input' onClick={() => setIsEditing(true)}>
          {eventName || "Add Event"}
        </p>
      )}
    </div>
  );
};

export default EditableInput;
