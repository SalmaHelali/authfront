import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import { GetAnimal } from '../../redux/actions/AnimalAction';
import { useDispatch } from 'react-redux';
function AnimalCard({el}) {
const dispatch = useDispatch()
  return( 
  <div>


<div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src= {el.Image}/>
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3> {el.Name}</h3>
          <div>
            <p> {el.Histoire} </p>
          </div>
        <Link to="/Animals" >  
        <button class="button-8" role="button" onClick={()=>dispatch(GetAnimal(el._id))}>
          
           More information </button></Link>

        </div></div>

  </div>);
}

export default AnimalCard;
