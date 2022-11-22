import React from "react";
import { useState } from "react";
import DatePickerComponent from "./DatePicker";
import {
  BookingContainer,
  SubmitButton,
  BookingForm,
  Label,
  Form,
  IntroBigTitle,
  Input,
  ReservationInfo,
  BookedWrapper,
  BookedInputName,
  BookedData,
  ButtonWrapper,
  Button,
  Text,
} from "./BookingElements";

const Booking = ({ setSelectedDate }) => {
  const [input, setInput] = useState("");
  // const [showForm, setShowForm] = useState(false);
  const [submitReservation, setSubmitReservation] = useState(false);

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
    <BookingContainer id="booking">
      {/* {!showForm ? (
        <SubmitButton onClick={setShowForm}>Book a Table</SubmitButton>
      ) : ( */}
      <BookingForm id="booking-form">
        {!submitReservation ? (
          <Form type="submit" onChange={handleSubmit}>
            <IntroBigTitle>{"Book your Table"}</IntroBigTitle>
            <Label username="UserName">
              Enter Name:
              <br />
              <Input
                required=""
                type="text"
                name="username"
                placeholder="Name"
                value={input.username || ""}
                onChange={handleChange}
              />
            </Label>
            <Label email="Email">
              Enter Email:
              <br />
              <Input
                required=""
                type="email"
                name="email"
                placeholder="Email Address"
                value={input.email || ""}
                onChange={handleChange}
              />
            </Label>
            <Label guests="Guests">
              Number of Guests:
              <br />
              <Input
                required=""
                type="number"
                name="guests"
                placeholder="Number of Guests"
                value={input.guests || ""}
                onChange={handleChange}
              />
            </Label>

            <DatePickerComponent />

            <SubmitButton type="submit" onClick={setSubmitReservation}>
              Confirm Reservation
            </SubmitButton>
          </Form>
        ) : (
          <ReservationInfo>
            <IntroBigTitle>{"Thank you for choosing us!"}</IntroBigTitle>
            <BookedWrapper>
              <BookedInputName>Your reservation name is:</BookedInputName>
              <BookedData name="username" value={input.username}>
                {input.username}
              </BookedData>

              <BookedInputName>Email:</BookedInputName>
              <BookedData name="email" value={input.email}>
                {input.email}
              </BookedData>

              <BookedInputName>Number of guests:</BookedInputName>
              <BookedData value={input.guests}>{input.guests}</BookedData>

              <BookedInputName>Date & Time of reservation:</BookedInputName>
              <BookedData selectedDate={setSelectedDate}>
                {setSelectedDate}
              </BookedData>
              <ButtonWrapper>
                {/* <Button>Confirm</Button> */}

                <Button>Cancel</Button>
              </ButtonWrapper>
              <Text>
                *In case of cancelling your reservation jigt hisd.<br />
                <input type="checkbox" name="terms" value="" style={{"BackgroundColor":"#fab623"}}/>&#160;
                Fgfgjfge hjgg shdgdgh djgdg hdgggdg jgjhgu dd jhh n sd.
              </Text>
            </BookedWrapper>
          </ReservationInfo>
        )}
        ;
      </BookingForm>
    </BookingContainer>
  );
};

export default Booking;
