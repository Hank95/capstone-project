import React, { useState } from "react";
import styled from "styled-components";
import ListingCard from "./boatDetails/ListingCard";

const MyBookingsCard = ({ myBooking, handleDelete, handleUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [bookingDate, setBookingDate] = useState(myBooking.date);
  const [passengers, setPassengers] = useState(myBooking.guests);
  const handleDate = (data) => {
    let date = data.split("-");
    date.push(date.shift());
    let properDate = date.join("/");
    return properDate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(
      {
        date: bookingDate,
        guests: passengers,
        boat_id: myBooking.id,
      },
      myBooking.id
    );
  };

  return (
    <BookingCard>
      <Info>
        {handleDate(myBooking.date)}, {myBooking.guests} Guests
      </Info>

      <ListingCard boat={myBooking.boat} />
      <ActionButtons>
        {editing ? (
          <Button onClick={() => setEditing(false)}>Cancel</Button>
        ) : (
          <Button onClick={() => setEditing(true)}>Edit</Button>
        )}
        <Button onClick={() => handleDelete(myBooking.id)}>
          Cancel Booking
        </Button>
      </ActionButtons>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label for="date">Date</Label>
            <Input
              type="date"
              name="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label for="guests">Number of Guest</Label>
            <Input
              type="number"
              name="guests"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button type="submit">Update</Button>
          </FormField>
        </form>
      ) : null}
    </BookingCard>
  );
};

const BookingCard = styled.div`
  background-color: rgb(221, 241, 251);
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 20px;
`;
const Info = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;
  background-color: rgba(58, 142, 216, 1);
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;
const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 30px;
`;

const Label = styled.label`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;
const Input = styled.input`
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
`;
export default MyBookingsCard;
