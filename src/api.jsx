import axios from 'axios'

const instance = axios.create({
  baseURL: 'www.refugerestrooms.org/api',
})

export default instance
