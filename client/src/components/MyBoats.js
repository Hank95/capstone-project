import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyBoatCard from "./MyBoatCard";
import Footer from "./Footer";

const MyBoats = ({ myBoats, setMyBoats, myBookings, setMyBookings }) => {
  const handleDelete = (id) => {
    let updatedBoats = myBoats.filter((boat) => boat.id !== id);
    setMyBoats(updatedBoats);
    fetch(`/api/boats/${id}`, {
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

  const handleAccepted = (id) => {
    fetch(`/api/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accepted: true }),
    })
      .then((res) => res.json())
      .then((json) => {
        setMyBookings(() => updateBoats(myBookings, json));
      });
  };

  if (myBoats.length === 0) {
    return (
      <>
        <Wrapper>
          <h3>Likes like you don't have any boats yet!</h3>
          <Button as={Link} to="/add-a-boat">
            {" "}
            List Your Boat
          </Button>
        </Wrapper>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Wrapper>
        <h1>My Boats!</h1>
        {myBoats.map((boat) => (
          <MyBoatCard
            key={boat.id}
            boat={boat}
            handleDelete={handleDelete}
            handleAccepted={handleAccepted}
          />
        ))}
        <Button as={Link} to="/add-a-boat">
          {" "}
          Add another boat!
        </Button>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  margin: auto;
  max-width: 65%;
  margin-bottom: 15px;
  position: relative;
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

export default MyBoats;
