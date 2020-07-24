import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="root">
      <h1 className="title">SAFE AND SOUND</h1>
      <Link to="/restrooms">
        <Button className="homeButton" variant="custom">
          LOCATE A SAFE RESTROOM
        </Button>
      </Link>
    </div>
  );
}
