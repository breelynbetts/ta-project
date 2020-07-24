import React from "react";
import { useHistory } from "react-router-dom";
import RestroomCard from "./RestroomCard";
import { CardColumns } from "react-bootstrap";

export default function RestroomList({ restRooms }) {
  let history = useHistory();

  const handleOnClick = (restRoom) => {
    localStorage.setItem(restRoom.id, JSON.stringify(restRoom));
    history.push(`/restroom/${restRoom.id}`);
  };

  if (!restRooms) {
    return <div>loading ....</div>;
  }
  return (
    <CardColumns>
      {restRooms &&
        restRooms.map((restRoom) => (
          <RestroomCard handleOnClick={handleOnClick} restRoom={restRoom} />
        ))}
    </CardColumns>
  );
}
