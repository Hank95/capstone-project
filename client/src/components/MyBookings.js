import styled from "styled-components";
import MyBookingsCard from "./MyBookingCard";
import { Link } from "react-router-dom";

const MyBookings = ({ myBookings, setMyBookings }) => {
  const handleDelete = (id) => {
    let updatedBookings = myBookings.filter((boat) => boat.id !== id);
    setMyBookings(updatedBookings);
    fetch(`/api/bookings/${id}`, {
      method: "DELETE",
    });
  };

  const updateBoats = (boats, updatedBoat) => {
    const updatedBoats = boats.map((boat) => {
      if (boat.id === updatedBoat.id) {
        return (boat = updatedBoat);
      } else {
        return boat;
      }
    });
    return updatedBoats;
  };

  const handleUpdate = (bookingData, id) => {
    fetch(`/api/bookings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((json) => {
        setMyBookings(() => updateBoats(myBookings, json));
      });
  };

  if (myBookings.length === 0) {
    return (
      <Wrapper>
        <h3>Likes like you don't have any bookings yet!</h3>
        <Button as={Link} to="/">
          {" "}
          Search for Boats
        </Button>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>My Bookings</h1>
      {myBookings.map((myBooking) => (
        <MyBookingsCard
          key={myBooking.id}
          myBooking={myBooking}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  max-width: 65%;
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

export default MyBookings;
