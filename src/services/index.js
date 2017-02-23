import axios from 'axios'

export async function login(data) {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
  .then(data => data)
}
