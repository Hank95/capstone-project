import React, { useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import ListingCard from "./boatDetails/ListingCard";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

const Listings = ({ search, setSearch }) => {
  const [boatsInBounds, setBoatsInBounds] = useState([]);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <Container>
        <ListingsContainer>
          {boatsInBounds.map((boat) => (
            <ListingCard key={boat.id} boat={boat} setSelected={setSelected} />
          ))}
        </ListingsContainer>
        {/* <div>map</div> */}
        <Map
          search={search}
          boats={boatsInBounds}
          setBoatsInBounds={setBoatsInBounds}
          selected={selected}
          setSelected={setSelected}
        />
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 101vh;
`;

const ListingsContainer = styled.div`
  height: 100vh;
  overflow: scroll;
`;

export default Listings;
