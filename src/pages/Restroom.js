import React, { useState, useEffect } from "react";
import RestroomList from "../components/RestroomList";
import { Container } from "react-bootstrap";
import AppSpinner from "../components/AppSpinner";

import SearchLocation from "../components/SearchLocation/SearchLocation";
import useRestRooms from "../hooks/useRestrooms";

import "./Restroom.scss";

export default function Restroom() {
  const [coord, setCoord] = useState({ lat: "", lng: "" });
  const [restRooms, loading, error] = useRestRooms(coord);

  const setToUsersCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("in here");
      setCoord({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    console.log("api");
    console.log(coord);
    if (!coord.lat) {
      setToUsersCurrentLocation();
    }
  }, [coord, restRooms, setCoord]);

  console.log("COORD", coord);
  return (
    <Container>
      <SearchLocation
        setCoord={setCoord}
        setToUsersCurrentLocation={setToUsersCurrentLocation}
      />

      {loading ? <AppSpinner /> : <RestroomList restRooms={restRooms} />}
    </Container>
  );
}
