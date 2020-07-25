import React, { useState } from 'react'
import Geocode from 'react-geocode'

import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete'

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY)

export default function SearchInput({ setCoord }) {
  const [address, setAddress] = useState('')

  const handleSelect = async (value) => {
    console.log(value)
    const response = await Geocode.fromAddress(value)
    console.log(response.results[0].geometry.location)
    setCoord(response.results[0].geometry.location)
  }

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={(e) => handleSelect(e)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Find a restroom',
                className: 'location-search-input',
              })}
            />
            <div
              className={`autocomplete-dropdown-container ${
                suggestions.length > 0 ? 'show' : ''
              }`}
            >
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item active'
                  : 'suggestion-item'

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  )
}
