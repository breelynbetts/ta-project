import React from 'react'
import { Spinner } from 'react-bootstrap'

import './AppSpinner.scss'

const AppSpinner = () => {
  return (
    <div id="overlay" style={{ width: '100%', textAlign: 'center' }}>
      <Spinner
        className="app-spinner"
        animation="border"
        variant="dark"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}

export default AppSpinner
