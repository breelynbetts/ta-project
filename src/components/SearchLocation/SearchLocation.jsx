import React, { useState } from 'react'
import { GoogleComponent } from 'react-google-location'
import { Form, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

import './SearchLocation.scss'

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Search Current Location
    </Tooltip>
  )
}

const SearchLocation = ({ setCoord }) => {
  const [place, setPlace] = useState('')
  console.log('nav: ', navigator)
  return (
    <Form.Row className="align-items-center">
      <Col xs="10">
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
      </Col>
      <Col xs="2">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button type="submit" variant="outline-dark">
            <i class="fa fa-compass" aria-hidden="true"></i>
          </Button>
        </OverlayTrigger>
      </Col>
    </Form.Row>
  )
}

export default SearchLocation
