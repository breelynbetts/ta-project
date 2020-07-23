import React from "react";
import { Card } from "react-bootstrap";

export default function RestroomCard(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.address}</Card.Text>
        <Card.Text>Distance from you: {props.distance} (miles)</Card.Text>
      </Card.Body>
    </Card>
  );
}
