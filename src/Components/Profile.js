 import React, { useEffect } from 'react'
  import { useDispatch} from 'react-redux';
 import { getcurrent } from '../redux/actions/authAction';
import AnimalList from './AnimalList';


 function Profile() {
  
   const dispatch = useDispatch();
   useEffect(()=>{
     dispatch(getcurrent());
   },[])
  
     return(
   <div  className="back" >
    
<AnimalList/>

  </div>
   )
 }
 
 export default Profile ;

