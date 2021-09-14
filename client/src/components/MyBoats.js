import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyBoatCard from "./MyBoatCard";

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
      <Wrapper>
        <h3>Likes like you don't have any boats yet!</h3>
        <Button as={Link} to="/add-a-boat">
          {" "}
          List Your Boat
        </Button>
      </Wrapper>
    );
  }
  return (
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

// const MyBoatCard = ({ boat, handleDelete }) => {
//   const id = boat.id;
//   const src = `/my-boats/${id}`;
//   const setSelected = (e) => {
//     return null;
//   };
//   console.log(boat);

//   return (
//     <>
//       <ListingCard boat={boat} setSelected={setSelected} />
//       <ActionButtons>
//         <Button as={Link} to={src}>
//           Edit
//         </Button>
//         <Button onClick={() => handleDelete(id)}>Delete</Button>
//       </ActionButtons>
//       <Divider />
//     </>
//   );
// };

// const Divider = styled.hr`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   margin: 16px 0 16px 0;
// `;

// const ActionButtons = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   column-gap: 50px;
// `;
export default MyBoats;
