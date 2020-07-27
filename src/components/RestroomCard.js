import React from "react";
import { Card } from "react-bootstrap";

import "./RestRooms.scss";

export default function RestroomCard({ handleOnClick, restRoom }) {
  return (
    <Card
      key={restRoom.id}
      style={{ margin: "10px 0px" }}
      className="text-center"
    >
      <Card.Body className="card-body" onClick={() => handleOnClick(restRoom)}>
        <Card.Title>{restRoom.name}</Card.Title>
        <Card.Text>
          {restRoom.street}, {restRoom.state}{" "}
        </Card.Text>
        <Card.Text>
          Distance from you: {restRoom.distance.toFixed(2)} miles
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
        <small className="text-muted">
          <i class="fa fa-thumbs-up" aria-hidden="true"></i>:{" "}
          <p className="vote-text">{restRoom.upvote}</p>
          <i class="fa fa-thumbs-down" aria-hidden="true"></i>:{" "}
          <p className="vote-text">{restRoom.downvote}</p>
        </small>
      </Card.Footer>
    </Card>
  );
}
