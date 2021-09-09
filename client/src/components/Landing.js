import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../util/use-auth";
import dock from "./assets/dock.jpeg";
import SearchBar from "./SearchBar";

const Landing = ({ setSearch }) => {
  return (
    <div>
      <Image src={dock} alt="Peaceful dock" />

      <Container>
        <SearchBar setSearch={setSearch} />
      </Container>
    </div>
  );
};

const Image = styled.img`
  width: 100%;
  /* height: 100vh; */
  z-index: -5;
`;
const Container = styled.div`
  top: 300px;
  left: 33vw;
  /* margin: 25vh; */
  position: absolute;
  width: 25vw;
  max-width: 700px;
  min-width: 300px;
  padding: 33px;
  padding-right: 47px;
  border-radius: 6px;
  background-color: white;
`;

export default Landing;
