import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Geocode from "react-geocode";
import BoatForm from "./BoatForm";

const EditMyBoats = ({ boats, setBoats, myBoats, setMyBoats }) => {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [photoFile, setPhotoFile] = useState("");
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
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const id = useParams().id;

  useEffect(() => {
    fetch(`/api/boats/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBoatData(data);
        setIsLoaded(true);
      });
  }, [id]);

  const handleUpdate = (boats, updatedBoat) => {
    const updatedBoats = boats.map((boat) => {
      if (boat.id === updatedBoat.id) {
        return (boat = updatedBoat);
      } else {
        return boat;
      }
    });
    return updatedBoats;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);

    let response = await Geocode.fromAddress(boatData.location);
    const { lat, lng } = await response.results[0].geometry.location;

    // let coordsData = { ...boatData, lat: lat, long: lng };
    const formData = new FormData();
    formData.append("title", boatData.title);
    formData.append("description", boatData.description);
    formData.append("price", boatData.price);
    formData.append("make", boatData.make);
    formData.append("model", boatData.model);
    formData.append("year", boatData.year);
    formData.append("length", boatData["length"]);
    formData.append("passengers", boatData.passengers);
    formData.append("crew", boatData.crew);
    formData.append("bed", boatData.bed);
    formData.append("sleep", boatData.sleep);
    formData.append("sailboat", boatData.sailboat);
    formData.append("fuel", boatData.fuel);
    formData.append("tender", boatData.tender);
    formData.append("alcohol", boatData.alcohol);
    formData.append("food", boatData.food);
    formData.append("extras", boatData.extras);
    formData.append("location", boatData.location);
    formData.append("lat", lat);
    formData.append("long", lng);
    if (photoFile) {
      formData.append("photo", photoFile);
    }
    console.log(formData);

    let fetchRes = await fetch(`/api/boats/${id}`, {
      method: "PUT",
      // headers: { "Content-Type": "application/json" },
      body: formData,
    });

    if (!fetchRes.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let json = await fetchRes.json();
    setIsLoading(false);
    setMyBoats(() => handleUpdate(myBoats, json));
    setBoats(() => handleUpdate(boats, json));
  }
  function handleFile(e) {
    setPhotoFile(e.target.files[0]);
  }
  function handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setBoatData({
      ...boatData,
      [name]: value,
    });
  }
  if (!isLoaded) return <h2>Loading...</h2>;

  return (
    <Page>
      <Wrapper>
        <h2>Update Your Boat</h2>
        <h5>Here is your boat data update form</h5>
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
// const Button = styled.button`
//   cursor: pointer;
//   font-size: 1.3rem;
//   border: 1px solid transparent;
//   border-radius: 6px;
//   padding: 8px 16px;
//   text-decoration: none;
//   width: 100%;
//   background-color: rgba(58, 142, 216, 1);
//   display: flex;
//   justify-content: center;
//   align-self: center;
//   a {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

export default EditMyBoats;
