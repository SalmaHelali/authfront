import React from 'react'
import { useSelector } from 'react-redux'
 import Users from './users'
import authReducer from '../redux/reducers/authReducer';

function Listuser() {
    const users = useSelector(state=>state.authReducer.users)
    console.log(users)
   return (
       <>
{ users.map((user)=> <Users user={user} key={user._id}></Users>)}
       </>
   ) 
}
export default Listuser
