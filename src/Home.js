import React from "react";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="root">
      <h1 className="title">SAFE AND SOUND</h1>
      <Button className="homeButton" variant="custom">
        LOCATE A SAFE RESTROOM
      </Button>
    </div>
  );
}
