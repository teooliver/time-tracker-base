import React, { FC } from "react";

interface Props {
  value?: Date;
  onClick?: any;
}

const CustomDatePickerInput: FC<Props> = ({ value, onClick }) => {
  return (
    <div>
      <button className='custom-datepicker-input' onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default CustomDatePickerInput;
