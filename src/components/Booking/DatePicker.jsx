import { useState } from "react";
import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());

  // const handleChange = e => {
  //   setStartDate
  // }

  const handleChange = (date) => {
    setStartDate({
      startDate: date,
    });
  };

  // const onFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(startDate)
  // }

  return (
    //   <form onSubmit={ onFormSubmit }>
    <div className="form-group">
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
        minDate={new Date()}
        maxDate={addDays(new Date(), 14)}
      />
      {/* <button className="btn btn-primary">Show Date</button> */}
    </div>
    // </form>
  );
}

export default DatePickerComponent;
