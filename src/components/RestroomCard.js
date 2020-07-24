import React from 'react'
import { Card } from 'react-bootstrap'

export default function RestroomCard({
  restRoom: { name, street, distance, state, upvote, downvote },
}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {street}, {state}{' '}
        </Card.Text>
        <Card.Text>Distance from you: {distance.toFixed(2)} miles</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          Up vote:{upvote} Down vote:{downvote}
        </small>
      </Card.Footer>
    </Card>
  )
}
