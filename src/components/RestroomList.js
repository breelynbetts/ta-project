import React from "react";
import { CardDeck } from "react-bootstrap";
import RestroomCard from "./RestroomCard";
// import { getRestaurants } from "../fakeApi";

export default function RestroomList() {
  return (
    <CardDeck>
      <RestroomCard name="Coffee Bean and Tea Leaf" />
    </CardDeck>
  );
}
