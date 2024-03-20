import axios from 'axios'

const blogFetch = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    "Content-Type": "Application/Json"
  }
})

export default blogFetch