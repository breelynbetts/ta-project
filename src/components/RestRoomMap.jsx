import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends React.Component {
  render() {
    console.log(
      'this ',
      this.props.restRoom.latitude,
      this.props.restRoom.longitude
    )
    return (
      <Map
        style={{ width: '600px', display: 'block' }}
        google={this.props.google}
        zoom={14}
        center={{
          lat: this.props.restRoom.latitude,
          lng: this.props.restRoom.longitude,
        }}
      >
        <Marker
          position={{
            lat: this.props.restRoom.latitude,
            lng: this.props.restRoom.longitude,
          }}
        />
        <Marker />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>hello</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA92b9a2VUQ16zGYs2TdMnGvN1m73NBUm4',
})(MapContainer)
