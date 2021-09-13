import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Map from "./Map";
import ListingCard from "./boatDetails/ListingCard";
import SearchBar from "./SearchBar";

const Listings = ({ search, setSearch }) => {
  const [boatsInBounds, setBoatsInBounds] = useState([]);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <Container>
        <div>
          {boatsInBounds.map((boat) => (
            <ListingCard key={boat.id} boat={boat} setSelected={setSelected} />
          ))}
        </div>
        {/* <div>map</div> */}
        <Map
          search={search}
          boats={boatsInBounds}
          setBoatsInBounds={setBoatsInBounds}
          selected={selected}
          setSelected={setSelected}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export default Listings;
