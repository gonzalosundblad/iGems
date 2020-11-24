
const initialState = {
    taste: '',
    mins: '',
    gems: [],
    users: []
  };


  function rootReducer(state = initialState, action) {
      switch(action.type) {
        case 'SET_LENGTH&TASTE':
              console.log(action.payload, 'redd')
              return {
                  ...state,
                  mins: action.payload.time,
                  taste: action.payload.taste
              }
        case 'GET_GEMS':
            return {
                ...state,
                gems: action.payload
            }
        case 'POST_USER': 
            return {
              ...state,
              users: state.users.push(action.payload)
            }
              default:
                return state;
            }
    }

    export default rootReducer; 
          
