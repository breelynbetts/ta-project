import React from 'react'
import { CardDeck } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import RestroomCard from './RestroomCard'

export default function RestroomList({ restRooms }) {
  let history = useHistory()

  const handleOnClick = (restRoom) => {
    localStorage.setItem(restRoom.id, JSON.stringify(restRoom))
    history.push(`/restroom/${restRoom.id}`)
  }

  if (!restRooms) {
    return <div>loading ....</div>
  }
  return (
    <div>
      {restRooms &&
        restRooms.map((restRoom) => (
          <RestroomCard handleOnClick={handleOnClick} restRoom={restRoom} />
        ))}
    </div>
  )
}
