import React, { useState } from "react";
import styled from "styled-components";
import ListingCard from "./boatDetails/ListingCard";
import { Link } from "react-router-dom";

const MyBoatCard = ({ boat, handleDelete, handleAccepted }) => {
  const [clicked, setClicked] = useState(false);
  const id = boat.id;
  const src = `/my-boats/${id}`;
  const setSelected = (e) => {
    return null;
  };

  return (
    <>
      <ListingCard boat={boat} setSelected={setSelected} />
      <ActionButtons>
        <Button as={Link} to={src}>
          Edit
        </Button>
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      </ActionButtons>

      <Button onClick={() => setClicked(!clicked)}>
        {clicked ? "Close" : "Bookings"}
      </Button>
      {clicked ? (
        <div>
          {boat.bookings.map((booking) => (
            <Card
              key={booking.id}
              booking={booking}
              handleAccepted={handleAccepted}
            />
          ))}
        </div>
      ) : null}
      <Divider />
    </>
  );
};

const Card = ({ booking, handleAccepted }) => {
  const [acceptClick, setAcceptClick] = useState(false);
  const handleDate = (data) => {
    let date = data.split("-");
    date.push(date.shift());
    let properDate = date.join("/");
    return properDate;
  };

  return (
    <>
      <Divider />
      <Wrapper>
        <Container>
          <div>
            <div>{handleDate(booking.date)}</div>
            <div>
              User {booking.user.username} with {booking.guests} guests
            </div>
          </div>
          <div>
            {booking.accepted ? (
              <SmallButton onClick={null}>Accepted</SmallButton>
            ) : (
              <SmallButton
                disable={booking.accepted}
                onClick={() => {
                  setAcceptClick(true);
                  handleAccepted(booking.id);
                }}
              >
                {acceptClick ? "Accepted" : "Accept?"}
              </SmallButton>
            )}
            <EmailButton href={"mailto:" + booking.user.email}>
              Email
            </EmailButton>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0 16px 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  max-width: 800px;
  margin: auto;
  font-size: 1.2rem;
  font-weight: 500;
`;

const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
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
const SmallButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 5px 10px;
  text-decoration: none;
  width: 100%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const EmailButton = styled.a`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 5px 10px;
  text-decoration: none;
  width: 90%;
  background-color: rgba(58, 142, 216, 1);
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default MyBoatCard;
