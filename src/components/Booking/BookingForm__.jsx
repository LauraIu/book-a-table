import React from "react";
import { useState } from "react";
import { BookingContainer } from "./BookingElements";
import DatePickerComponent from "./DatePicker";


const BookingForm = () => {

    
    // const [isDisabled, setIsDisabled] = useState(true);
    const [inputs, setInputs] = useState("");
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);   
    };

    
    return (
        <BookingContainer>
            <h1>
                Book a Table
            </h1>

            <form onSubmit={ handleSubmit } >
                <label username="UserName">My Name:
                <input 
                    type="text" 
                    name="username" 
                    placeholder="My Name" 
                    value={inputs.username || ""}
                    onChange={handleChange}
                /> 
                </label>
                <label email="Email">My Email:
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
                </label>
                <label guests="Guests">Number of Guests:
                <input   
                    type="number" 
                    name="guests" 
                    placeholder="Number of Guests" 
                    value={inputs.guests || ""}
                    onChange={handleChange}
                />
                </label>
                <DatePickerComponent/>

                <button type="submit">
                    Submit Reservation
                </button>
            </form>
        </BookingContainer>
    );
};

export default BookingForm;