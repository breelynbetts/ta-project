import React from 'react'
import { CardDeck } from 'react-bootstrap'
import RestroomCard from './RestroomCard'

export default function RestroomList({ restRooms }) {
  console.log(restRooms)

  if (!restRooms) {
    return <div>loading ....</div>
  }
  return (
    <div>
      {restRooms &&
        restRooms.map((restRoom) => <RestroomCard restRoom={restRoom} />)}
    </div>
  )
}
