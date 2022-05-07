import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AnimalCard from './Home/AnimalCard';

import { GetAnimals } from '../redux/actions/AnimalAction';

function AnimalList() {
const dispatch= useDispatch()
  useEffect(()=> {dispatch(GetAnimals())},[])
     const animals = useSelector((state)=>state.AnimalReducer.Animals)
     console.log(animals)
  return (<div 
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
    }}
  
  >

 {animals && animals.map((el)=> <AnimalCard el={el} ></AnimalCard>)} 

  </div>
  );
}

export default AnimalList;
