import React, { FC } from "react";

interface Props {
  value?: Date;
  onClick?: any;
}

const CustomDatePickerInput: FC<Props> = ({ value, onClick }) => {
  return (
    <button className='custom-datepicker-input' onClick={onClick}>
      {value}
    </button>
  );
};

export default CustomDatePickerInput;
