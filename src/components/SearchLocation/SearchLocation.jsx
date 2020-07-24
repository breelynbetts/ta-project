import React, { useState } from 'react'
import { GoogleComponent } from 'react-google-location'

import './SearchLocation.scss'

const SearchLocation = ({ setCoord }) => {
  const [place, setPlace] = useState('')
  return (
    <div>
      <GoogleComponent
        apiKey={process.env.REACT_APP_GOOGLE_KEY}
        language={'en'}
        country={'country:in|country:us'}
        coordinates={true}
        locationBoxStyle={'custom-style'}
        locationListStyle={'custom-style-list'}
        onChange={(e) => {
          console.log(e)
          if (e.coordinates) {
            setCoord(e.coordinates)
          }
          setPlace(e)
        }}
      />
    </div>
  )
}

export default SearchLocation
