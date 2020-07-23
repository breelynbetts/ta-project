import React, { useState } from 'react'
import { GoogleComponent } from 'react-google-location'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import 'react-google-places-autocomplete/dist/index.min.css'

const API_KEY = 'AIzaSyA92b9a2VUQ16zGYs2TdMnGvN1m73NBUm4'

const Test = () => {
  const [place, setPlace] = useState('')
  return (
    <div>
      <GoogleComponent
        apiKey={API_KEY}
        language={'en'}
        country={'country:in|country:us'}
        coordinates={true}
        locationBoxStyle={'custom-style'}
        locationListStyle={'custom-style-list'}
        onChange={(e) => {
          console.log(e)
          setPlace(e)
        }}
      />
    </div>
  )
}

export default Test

//   <GooglePlacesAutocomplete
//     onSelect={console.log}
//     apiKey="AIzaSyA92b9a2VUQ16zGYs2TdMnGvN1m73NBUm4"
//   />
