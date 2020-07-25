import React, { useState } from 'react'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'

function Map({ restRoom }) {
  const [infoBoxOpen, setInfoBoxOpen] = useState(false)
  const onMarkerClick = () => {
    setInfoBoxOpen(true)
  }

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: restRoom.latitude, lng: restRoom.longitude }}
    >
      <Marker
        onClick={onMarkerClick}
        position={{
          lat: restRoom.latitude,
          lng: restRoom.longitude,
        }}
      />
    </GoogleMap>
  )
}
export default withScriptjs(withGoogleMap(Map))
