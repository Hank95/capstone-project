import styled from "styled-components";
import MyBookingsCard from "./MyBookingCard";

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
    console.log(bookingData);
    fetch(`/api/bookings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMyBookings(() => updateBoats(myBookings, json));
      });
  };
  return (
    <Wrapper>
      <h1>My Bookings</h1>
      {myBookings.map((myBooking) => (
        <MyBookingsCard
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

export default MyBookings;
