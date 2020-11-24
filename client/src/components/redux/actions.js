
import axios from 'axios';


// export function setTaste(payload) {
//     console.log(payload)
//     return { 
//         type: 'SET_TASTE', 
//         payload 
//     }
//   };
  
export function setLengthAndTaste(payload) {
    console.log(payload)
  return {
      type: 'SET_LENGTH&TASTE', 
      payload
  }
};

export function getGemsRequest(allGems) {//va a REDUCER
  return {
    type: 'GET_GEMS',
    payload: allGems
  }
}
export function getGems() {
  return (dispatch) => {
    axios.get(`http://localhost:8000/gems/`)
      .then(response => { dispatch(getGemsRequest(response.data)) })
      .catch(err => { console.log(err) })
  }
}


export function postUser(payload) {
  console.log(payload)
  return (dispatch) => {
    axios.post(`http://localhost:8000/users/`, payload)
      .then(response => { dispatch({
        type: 'POST_USER',
        payload: response
      })})
      .catch(err => { console.log(err) })
  }
}
