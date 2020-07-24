import React from 'react'
import { Spinner } from 'react-bootstrap'

const AppSpinner = () => {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}

export default AppSpinner
