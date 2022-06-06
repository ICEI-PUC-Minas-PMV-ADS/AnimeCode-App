import API from './webApi_service'
import {url_base} from './Url_base'

export const register = async (param) => {
  try {
    return await API.post( url_base + `register`, param).then(
      response => {
        return response.data
      },
      error => {
        console.log(error)
        return null
      }
    )
  }
  catch(error) {
    console.log(error)
  }
}

export const login = async (param) => {
  try {
    return await API.post( url_base +`login` , param).then(
       response => {
        return response.data
      },
      error => {
        console.log(error)
        return null
      }
    )
  }
  catch(error) {
    console.log(error)
  }
}

export const changePassword = async (param) => {
  try{
    return await API.put( url_base + `users/1`, param).then(     
      response => {
        return response.data
      },
      error => {
        console.log(error)
        return null
      }
    )
  }
  catch(error) {
    console.log(error)
  }
}