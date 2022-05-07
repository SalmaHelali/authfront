
import { GET_ADOPT } from '../types/AdoptType';
const { REGISTER, FAIL, GET_CURRENT, LOGIN , LOGOUT , GET_USERS } = require("../types/authTypes")



const initialState = {
user: null,
errors:null,
auth : false,
users:[] , 
adopts:[]
}

 const authreducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case REGISTER :
        localStorage.setItem("token",payload.token)
        return {...state  , user : payload.user, auth: true,errors:null }


    case LOGIN : 
    localStorage.setItem("token",payload.token)
        return {...state  , user : payload.user, auth: true,errors:null }

        case FAIL : 
        return {...state,errors:payload.errors  , auth:false}
 
       case GET_CURRENT  : 
       return {...state , user : payload , auth: true} 


       case LOGOUT : 
       localStorage.removeItem("token") ;
       return {
           ...state , auth:false , user:null 
       } 

       case GET_USERS:
    return{ ...state, users :payload.listOfUsers };


    case GET_ADOPT: 
    return {...state,adopts:payload.Animal} ;

    default:
        return state ;
    }
}

export default authreducer