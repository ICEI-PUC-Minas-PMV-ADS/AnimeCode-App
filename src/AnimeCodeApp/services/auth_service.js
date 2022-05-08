import API from './webApi_service'

let url = "https://evil-rooms-judge-170-79-53-228.loca.lt/"

export const register = async (param) => {
  try {
    return await API.post( url + `register`, param).then(
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
    return await API.post( url +`login` , param).then(
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
    return await API.put( url + `users/1`, param).then(     
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