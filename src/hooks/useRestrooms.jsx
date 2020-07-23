import React, { useEffect, useState } from 'react'
import instance from '../api'
import axios from 'axios'

export default (lat, lng) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [restRooms, setRestRooms] = useState(null)
  useEffect(() => {
    async function fetchRestRooms() {
      try {
        const response = await axios.get(
          `v1/restrooms/by_location?lat=${lat}&lng=${lng}`
        )
        setRestRooms(response)
      } catch (error) {
        setError(error)
        console.log(error)
      }
      setLoading(false)
    }
    fetchRestRooms()
  }, [lat, lng])

  return [restRooms, loading, error]
}
