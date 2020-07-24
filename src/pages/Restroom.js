import React, { useState, useEffect } from 'react'
import RestroomList from '../components/RestroomList'
import { Container, Row, Col } from 'react-bootstrap'

import SearchLocation from '../components/SearchLocation/SearchLocation'
import useRestRooms from '../hooks/useRestrooms'

import './Restroom.scss'
import AppSpinner from '../components/AppSpinner'

export default function Restroom() {
  const [coord, setCoord] = useState({ lat: '', lng: '' })
  const [restRooms, loading, error] = useRestRooms(coord)

  useEffect(() => {
    console.log('api')
    console.log(coord)
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoord({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    })
  }, [coord, restRooms, setCoord])

  return (
    <Container>
      <SearchLocation setCoord={setCoord} />
      {loading ? <AppSpinner /> : <RestroomList restRooms={restRooms} />}
    </Container>
  )
}
