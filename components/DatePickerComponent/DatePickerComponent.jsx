import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import moment from 'moment'

export default function DatePickerComponent({ startDate, SetStartDate, endDate, SetEndDate }) {

  function setValue(value) {
    SetStartDate(value)
    SetEndDate(moment(value, "YYYY-MM-DD").add(1, 'days').format("YYYY-MM-DD"))
  }

  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Box m={2}>
        <DatePicker
          label="Choose a date"
          views={["year", "month", "day"]}
          format="DD-MM-YYYY"
          value={startDate}
          onChange={(newValue) => {
            setValue(moment(newValue).format("YYYY-MM-DD"))
         }}
          renderInput={(params) => <TextField {...params} />}
        />
    </Box>
      </LocalizationProvider>
  );
}
