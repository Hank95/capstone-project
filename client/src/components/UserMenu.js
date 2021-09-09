import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../util/use-auth";
import styled from "styled-components";
import arrow from "./assets/arrow.svg";
import menu from "./assets/menu.svg";

const UserMenu = () => {
  const [isClicked, setIsClicked] = useState(false);

  const auth = useAuth();

  const handleClick = () => {
    setIsClicked(false);
  };

  return (
    <div>
      {isClicked ? (
        <Container onMouseLeave={handleClick}>
          <Burger>
            <Username>{auth.user.username}</Username>
            <img src={arrow} alt="burger" onClick={handleClick} />
          </Burger>
          <GridItem>
            <Link to="/" onClick={handleClick}>
              {" "}
              Home
            </Link>
          </GridItem>
          <GridItem>
            <Link to="/my-bookings" onClick={handleClick}>
              {" "}
              Bookings
            </Link>
          </GridItem>
          <GridItem>
            <Link to="/add-a-boat" onClick={handleClick}>
              {" "}
              Add a Boat
            </Link>
          </GridItem>
          <GridItem>
            <Link to="/my-boats" onClick={handleClick}>
              {" "}
              My Boats
            </Link>
          </GridItem>
          <GridItem>
            <Link
              to="/"
              onClick={() => {
                auth.signout();
                handleClick();
              }}
            >
              Logout
            </Link>
          </GridItem>
        </Container>
      ) : (
        <Burger>
          <Username>{auth.user.username}</Username>
          <img src={menu} alt="menu" onClick={() => setIsClicked(true)} />
        </Burger>
      )}
    </div>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  border-radius: 6px;
  z-index: 200;
`;
const GridItem = styled.div`
  font-size: 15pt;
  padding: 10px;
  /* height: 100px; */
  width: auto;
  position: relative;
  align-content: center;
  text-align: center;
  border: 1px solid black;
  background-color: rgb(58, 142, 216);
  &:hover {
    background-color: white;
  }
`;
const Username = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 8px;
`;
const Burger = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgb(255, 255, 255);

  margin: auto;
  margin-right: 50px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.5em 0.5em 0.5em;
`;

export default UserMenu;
