import React from 'react'
import axios  from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from '@mui/material'; 
import './Card.css'

function Animal({el}) {
  const animal= useSelector(state=>state.AnimalReducer.Animal)
  const dispatch= useDispatch()
  const handleAdopt=  async(id)=>{ 
    const config= {
    headers: {
        authorization: localStorage.getItem('token')
    }
}
try {
const res= await  axios.post(`/adopt/${id}`,null,config)
console.log(res.data)
} catch (error) {
    console.log(error)
}}
  return (

    <div className='boxe' >
<div className="a-box" style={{  width:'100%' ,  margin: 'auto',
  

  padding: '10px'}}  >
        <div className="img-container"  style={{display:"flex" , width:'25%' }} >
          <div className="img-inner"  >
            <div className="inner-skew">
              <img src= { animal && animal.Image}/>
              
            </div>
          </div>
        </div>
        <div className="text-container">
          <h2> {animal && animal.Name}</h2>
          <div>
            <h3  style={{color:"rgb(29, 87, 29)"}} >  {animal && animal.Histoire} </h3>
            <h5> {animal && animal.Age} </h5>
            
          </div>
       
<h6   style={{color:"rgb(29, 87, 29)"}} > {animal && animal.Caractere} </h6>

{/* <Link to="/Animals" >  
        <button className='button-8' onClick={()=>handleAdopt(animal && animal._id)}  >adopt me</button> 
        
        </Link> */}

        <button className='button-8'  > Adopt me </button>
        
        </div>

        </div>

      
      
    </div>
  )
}

export default Animal