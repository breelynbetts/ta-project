import React, { useState } from 'react'
import { GoogleComponent } from 'react-google-location'
import SearchInput from './SearchInput'
import { Form, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

import './SearchLocation.scss'

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Search Current Location
    </Tooltip>
  )
}

const SearchLocation = ({ setCoord, setToUsersCurrentLocation }) => {
  console.log('nav: ', navigator)
  return (
    <Form.Row className="align-items-center">
      <Col xs="10">
        <SearchInput setCoord={setCoord} />
      </Col>
      <Col xs="2">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button variant="outline-dark" onClick={setToUsersCurrentLocation}>
            <i class="fa fa-compass" aria-hidden="true"></i>
          </Button>
        </OverlayTrigger>
      </Col>
    </Form.Row>
  )
}

export default SearchLocation
