import axios from 'axios'
const { REACT_APP_CONTACT_API } = process.env

export const sendContact = async (details) => {
  const response = await axios.post(REACT_APP_CONTACT_API, details)
  return response.data
}
