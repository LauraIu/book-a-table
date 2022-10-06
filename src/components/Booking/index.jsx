import React from "react";
import { useState } from "react";
import DatePickerComponent from "./DatePicker";
import {
  BookingContainer,
  Button,
  BookingForm,
  Label,
  Form,
  IntroBigTitle,
  Input,
} from "./BookingElements";

const Booking = () => {
  // const [isDisabled, setIsDisabled] = useState(true);
  const [input, setInput] = useState("");
  const [showForm, setShowForm] = useState(false);

  // const toggleForm = () => {
  //     setShowForm(!showForm);
  // };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <BookingContainer>
      {!showForm ? (
        <Button onClick={setShowForm}>Book a Table</Button>
      ) : (
        <BookingForm>
          <Form onSubmit={handleSubmit}>
            <IntroBigTitle>{"Book your Table"}</IntroBigTitle>
            <Label username="UserName">
              Enter Name:
              <br />
              <Input
                type="text"
                name="username"
                placeholder="My Name"
                value={input.username || ""}
                onChange={handleChange}
              />
            </Label>
            <Label email="Email">
              Enter Email:
              <br />
              <Input
                type="email"
                name="email"
                placeholder="My Email Address"
                value={input.email || ""}
                onChange={handleChange}
              />
            </Label>
            <Label guests="Guests">
              Number of Guests:
              <br />
              <Input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                value={input.guests || ""}
                onChange={handleChange}
              />
            </Label>
            <DatePickerComponent />

            <Button type="submit" onClick={handleSubmit}>
              Submit Reservation
            </Button>
          </Form>
        </BookingForm>
      )}
      ;
    </BookingContainer>
  );
};

export default Booking;
