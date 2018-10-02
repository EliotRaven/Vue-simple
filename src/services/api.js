import axios from 'axios'

class Api {
  call (url, method, data = {}) {
    return axios({
      method,
      url,
      data
    })
  }
}

export default new Api()
