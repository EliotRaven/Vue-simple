import Api from '../services/api'
import { Resource } from '../constants/resource'

export const resource = {
  index,
  store
}

function index (path) {
  return new Promise((resolve, reject) => {
    Api.call(Resource.host + path, 'GET').then(response => {
      return resolve(response.data)
    }, err => {
      return reject(err.toString())
    })
  })
}

function store (path, id) {
  return new Promise((resolve, reject) => {
    Api.call(Resource.host + path + '/' + id, 'GET').then(response => {
      return resolve(response.data)
    }, err => {
      return reject(err.toString())
    })
  })
}
