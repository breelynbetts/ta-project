import React, { useEffect, useState } from 'react'
import axios from '../api'

export default ({ lat, lng }) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [restRooms, setRestRooms] = useState([])

  useEffect(() => {
    async function fetchRestRooms() {
      try {
        const response = await axios.get(
          `/v1/restrooms/by_location?lat=${lat}&lng=${lng}`
        )
        console.log(response)

        setRestRooms(response.data)
      } catch (error) {
        setError(error)
        console.log(error)
      }
      setLoading(false)
    }
    if (!!lat && !!lng) {
      fetchRestRooms()
    }
  }, [lat, lng])

  return [restRooms, loading, error]
}
