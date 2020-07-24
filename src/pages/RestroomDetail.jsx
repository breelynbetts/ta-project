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

  return (
    <Container>
      <Card.Body>
        <Card.Title>{restRoom.name}</Card.Title>
        <Card.Text>
          {restRoom.street}, {restRoom.state}{' '}
        </Card.Text>
        <Card.Text>
          Distance from you: {restRoom.distance.toFixed(2)} miles
        </Card.Text>
        <RestRoomMap restRoom={restRoom} />
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          Up vote:{restRoom.upvote} Down vote:{restRoom.downvote}
        </small>
      </Card.Footer>
    </Container>
  )
}

export default RestroomDetail
