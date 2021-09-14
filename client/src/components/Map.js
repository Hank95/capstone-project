import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import MarkerCard from "./MarkerCard";

// import anchor from "./assets/anchor.svg";
import compass from "./assets/compass-f.svg";

const GOOGLE_KEY = `${process.env.REACT_APP_API_KEY}`;

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100vh",
  zIndex: "0",
};
// const center = {
//   lat: 41.4605,
//   lng: -76.57959,
// };
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

function Map({ search, boats, setBoatsInBounds, selected, setSelected }) {
  // const [selected, setSelected] = useState(null);
  const [center, setCenter] = useState({
    lat: 41.4605,
    lng: -76.57959,
  });
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_KEY,
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const changeBounds = () => {
    const mapBounds = mapRef.current.getBounds().toJSON();
    fetch(
      `/api/bounds?min_lat=${mapBounds.south}&max_lat=${mapBounds.north}&min_lng=${mapBounds.west}&max_lng=${mapBounds.east}`
    )
      .then((response) => response.json())
      .then((json) => setBoatsInBounds(json));
  };

  useEffect(() => {
    setCenter(search);
  }, [search]);

  if (loadError) return "Error loading map";

  if (!isLoaded) return "Loading map";

  return (
    <div>
      <Locate panTo={panTo} />
      {/* <Search panTo={panTo} /> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onLoad={onMapLoad}
        onBoundsChanged={changeBounds}
      >
        {boats.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.long }}
            onClick={() => {
              console.log(marker);
              setSelected(marker);
            }}
            // icon={{
            //   url: "./assets/anchor.svg",
            //   origin: new window.google.maps.Point(0, 0),
            //   anchor: new window.google.maps.Point(15, 15),
            //   scaledSize: new window.google.maps.Size(30, 30),
            // }}
          >
            {selected === marker ? (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.long }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <MarkerCard boat={marker} />
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src={compass} alt="compass" />
    </button>
  );
}

export default React.memo(Map);
