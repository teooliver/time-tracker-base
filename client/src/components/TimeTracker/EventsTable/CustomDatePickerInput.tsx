import React, { FC } from 'react';

interface Props {
  value?: Date;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * This will be used as the customInput on <DatePicker/> from React Date Picker
 * The props are going to be implicitly passed to the component.
 * I.e => customInput={<CustomDatePickerInput />}
 */
const CustomDatePickerInput: FC<Props> = ({ value, onClick }) => {
  return (
    <button className='custom-datepicker-input' onClick={onClick}>
      {value}
    </button>
  );
};

export default CustomDatePickerInput;
