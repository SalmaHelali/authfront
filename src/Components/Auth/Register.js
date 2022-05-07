import React, { useState } from 'react';
import './auth.css'
import{ useDispatch} from 'react-redux'
import { register } from '../../redux/actions/authAction';
import { useNavigate} from 'react-router-dom'

function Register() {


const [ email , setemail]= useState();

const [ password , setpassword] = useState();

const [username , setusername]=useState();

const [Date , setDate] =useState();

const Navigate =useNavigate()

const dispatch = useDispatch()

  return (
    <div  className="background"   >                      
  <div className='class' >
             <div> 
                    <div className="registration-form" >
                    <h1> Sign up </h1>
                    <form>

{/*               
<p>Full Name:</p>
 <input type="text" name="fullname" placeholder="Full Name" /> */}


 <p   className='p' >  User Name:</p> 
  <input className='input'
  value={username} 
 onChange={(e)=>setusername(e.target.value)}
        
 type="text" name="username" placeholder="User Name" />    

              <p  className='p' >Email:</p> 
              <input className='input'
                 value={email}
                 onChange={(e)=> setemail(e.target.value)}
              type="email" name="email" placeholder="Email" />

              <p    className='p'>Password:</p>
              <input className='input'
                value={password}
                onChange={(e)=> setpassword(e.target.value)}
              type="password" name="password" placeholder="Password" />

<p  className='p' >Date of birth:</p>
<input className='input'
value={Date}
onChange={(e)=>setDate (e.target.value) }
type="birth" name="birth" placeholder="Date" /> 
                          
                   <button className='button'
                    onClick={(e)=>{e.preventDefault();Navigate("/Signin");
                  dispatch(register({ email,password,username,birthDate:Date} ))
                
                  }} 
                  > Sign Up
                   </button>

 </form> 

 </div> 
  </div> 

  </div>

  </div>
  ) 
  }
export default Register ;
