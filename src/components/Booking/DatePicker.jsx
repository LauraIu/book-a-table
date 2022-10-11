import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { DateInputButton, CalendarLabel } from "./DatePickerElements";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";


function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setInput((values) => ({ ...values, [name]: value }));
  // };

  const handleDateChange = (selectedDate) => {
    setSelectedDate(new Date(selectedDate));
    console.log(selectedDate);
  };

  const CustomInput = ({ value, onClick }) => (
    <DateInputButton onClick={onClick}>{value}</DateInputButton>
  );

  return (
    <>
      <div className="form-group">
        <CalendarLabel>Choose your reservation date:</CalendarLabel>
        <DatePicker
          customInput={<CustomInput />}
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="Time"
          dateFormat="MMMM d, yyyy h:mm aa"
          minDate={new Date()}
          maxDate={addDays(new Date(), 14)}
        />
      </div>
    </>
  );
}

export default DatePickerComponent;
