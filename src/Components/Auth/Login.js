import React, { useState } from 'react';
import './auth.css'
import{ useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { login } from '../../redux/actions/authAction';

function Login() {

const [email , setemail]=useState() ; 
const [password , setpassword] =useState();
const dispatch = useDispatch()
const Navigate = useNavigate()

  return (
    <div   className='x'  
    >
  <div  className=  "login"  >
        <title>Registration Form</title>
        
        <div className="registration-form" >
          <h1> Sign In  </h1>
            <form action="#" method="post">


  <p className='p' >Email:</p>  

              <input className='input'

           value={email}
           onChange={(e)=>  setemail(e.target.value)}
              type="email" name="email" placeholder="Email" />
              <p className='p' >Password:</p>

              <input className='input'
       value={password}
       onChange={(e)=> setpassword (e.target.value)}

              type="password" name="password" placeholder="Password" />

               <button className='button'
                    onClick={(e)=>{e.preventDefault(); 
                  dispatch(login ({ email,password } , Navigate ))   
                  }} 
                  > Sign In </button>

<div className='account?' >

  <p  className='s'>

    <span  className='sign-up-now' >
{" "}
Don't have an account !

<Link  to='/signup' >

 <a href="#"  className='a' > Sign Up</a> {" "}
  </Link>
    </span>
  </p>

</div>
            </form> 
   
          </div> 
          </div>
      
  </div> 
  
  ) 
  }



export default Login ;
