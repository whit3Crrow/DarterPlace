import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue() {
  const [dateValue, setDateValue] = React.useState(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']} sx={{margin:'20px', scale:'110%'}}>
        <DatePicker sx={{ backgroundColor: 'white' , fontSize: '40px'}}
          label="Controlled picker"
          value={dateValue}
          onChange={(newValue) => setDateValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
