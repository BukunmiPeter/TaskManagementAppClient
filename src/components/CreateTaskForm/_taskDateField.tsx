import React, { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';
export const TaskDateField: FC<IDateField> = (
  props
): ReactElement => {
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;
  //   const [date, setDate] = useState<Date | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Task Date"
        format="dd/MM/yyyy"
        // value={date}
        value={value}
        disabled={disabled}
        onChange={onChange}
        // onChange={(newValue) => setDate(newValue)}
      />
    </LocalizationProvider>
  );
};
TaskDateField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
};
