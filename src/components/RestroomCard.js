import React from 'react'
import { Card } from 'react-bootstrap'

export default function RestroomCard({ handleOnClick, restRoom }) {
  return (
    <Card
      key={restRoom.id}
      style={{ margin: '10px 0px' }}
      onClick={() => handleOnClick(restRoom)}
    >
      <Card.Body>
        <Card.Title>{restRoom.name}</Card.Title>
        <Card.Text>
          {restRoom.street}, {restRoom.state}{' '}
        </Card.Text>
        <Card.Text>
          Distance from you: {restRoom.distance.toFixed(2)} miles
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          Up vote:{restRoom.upvote} Down vote:{restRoom.downvote}
        </small>
      </Card.Footer>
    </Card>
  )
}
