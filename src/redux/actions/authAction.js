import {FAIL, GET_CURRENT , LOGIN, REGISTER,LOGOUT , GET_USERS} from "../types/authTypes"
import axios from "axios"

export const register =(newuser, Navigate )=>async (dispatch)=>{

try {
    //register wala login method post 

    //..nahkyy  maa lback 
    const res= await  axios.post ('/auth/signup', newuser)
    dispatch ({
        type : REGISTER, 
        payload:res.data
    }) ; //  nrajaa3 f user msg o tokeen
Navigate('/Profile')
    
} catch (error) {
    dispatch({type : FAIL , payload : error.response.data }) ; 
}

}; 

export const login = (user, Navigate)=> async (dispatch)=> {
    try {
        const res = await axios.post('/auth/signIn', user ) ;

        dispatch ({type: LOGIN , payload : res.data }) ; 
if(res.data.user.role==="user")
     { Navigate('/Profile')}
     if(res.data.user.role==="admin")
     { Navigate('/Admin')}
    } catch (error) {
        dispatch ({type : FAIL , payload : error.response.data})  
    }
}


export const getcurrent=()=> async(dispatch)=>{

const token =localStorage.getItem('token')
const config = {
    headers : {
        authorization : token ,
    },
}

    try {
        
        const res = await axios.get('/auth/current',config);
        
        dispatch({type:GET_CURRENT ,paylod:res.data})
        
    } catch (error) {
        console.log(error)
        
    }
}
export const logout = (Navigate)=>{
    Navigate("/")    
    return{
    type:LOGOUT,
    }
}
export const getusers=()=>async(dispatch)=>{

    const config= {
        headers: {
            authorization:localStorage.getItem('token')
        }
    }
  try {
    const res = await axios.get("/auth/users",config);
    console.log("data",res.data)

    dispatch({ type:GET_USERS, payload: res.data });
  } catch (error) {
    // dispatch({ type: FAIL, payload: error.response.data });
    console.log(error);
  }
}