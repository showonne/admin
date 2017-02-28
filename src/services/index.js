import axios from 'axios'

const login = async (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
  .then(data => data)
}

export {
  login
}
