import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import RestRoomMap from '../components/RestRoomMap'

const RestroomDetail = ({ match }) => {
  let restRoom = JSON.parse(localStorage.getItem(match.params.id))
  useEffect(() => {
    // return () => {
    //   localStorage.removeItem(match.params.id)
    // }
  }, [match.params.id])

  console.log(restRoom.directions === "")
  return (
    <Container>
      <Card className="center">
      <Card.Body>
        <Card.Title>{restRoom.name}</Card.Title>
        <Card.Text>
          {restRoom.street}, {restRoom.state}{' '}
        </Card.Text>
        <Card.Text>
          Distance from you: {restRoom.distance.toFixed(2)} miles
        </Card.Text>
        {restRoom.directions === "" ? "" : <Card.Text>
          Directions: {restRoom.directions} 
        </Card.Text>}
        {restRoom.comment === "" ? "" : <Card.Text>
          Comment: {restRoom.comment} 
        </Card.Text>} 
        <div style={{ width: '100%', height: '400px' }}>
          <RestRoomMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            restRoom={restRoom}
          />
        </div>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          <i class="fa fa-thumbs-up" aria-hidden="true"></i>:{" "}
          <p className="vote-text">{restRoom.upvote}</p>
          <i class="fa fa-thumbs-down" aria-hidden="true"></i>:{" "}
          <p className="vote-text">{restRoom.downvote}</p>
        </small>
      </Card.Footer>
      </Card>
    </Container>
  )
}

export default RestroomDetail
