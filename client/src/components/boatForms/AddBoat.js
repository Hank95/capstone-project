import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Geocode from "react-geocode";
import BoatForm from "./BoatForm";

Geocode.setApiKey(process.env.REACT_APP_API_KEY);

const AddBoat = ({ myBoats, setMyBoats, boats, setBoats }) => {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);
  const [boatData, setBoatData] = useState({
    title: "",
    description: "",
    price: 50,
    make: "",
    model: "",
    year: 2020,
    length: 20,
    passengers: 4,
    crew: 0,
    bed: 0,
    sleep: 0,
    sailboat: "",
    fuel: 0,
    tender: false,
    alcohol: "",
    food: "",
    extras: "",
    location: "Newport, RI",
    lat: "",
    long: "",
    photos: "",
  });

  let history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);

    let response = await Geocode.fromAddress(boatData.location);
    const { lat, lng } = await response.results[0].geometry.location;

    let coordsData = { ...boatData, lat: lat, long: lng, photos: photoFile };

    let fetchRes = await fetch(`/api/boats`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coordsData),
    });

    if (!fetchRes.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let json = await fetchRes.json();
    setIsLoading(false);
    setBoats([...boats, json]);
    setMyBoats([...myBoats, json]);
    history.push("/my-boats");
  }

  function handleFile(e) {
    setPhotoFile(e.target.files[0]);
  }
  console.log(photoFile);

  function handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setBoatData({
      ...boatData,
      [name]: value,
    });
  }

  console.log(boatData);
  return (
    <Page>
      <Wrapper>
        <h2>Your Boat</h2>
        <h5>Please fill out this form to list your boat on AHOY!</h5>
        <Divider />
        <BoatForm
          boatData={boatData}
          handleChange={handleChange}
          handleFile={handleFile}
          handleSubmit={handleSubmit}
          errors={errors}
          isLoading={isLoading}
        />
      </Wrapper>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  /* height: 100%; */
  position: absolute;
  z-index: -20;
  background-color: rgb(2, 65, 128);
`;
const Wrapper = styled.section`
  max-width: 400px;
  /* max-height: 75%;
  overflow: scroll; */
  margin: 10vh auto;
  padding: 16px;
  background-color: white;
  border-radius: 6px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0 16px 0;
`;

export default AddBoat;
