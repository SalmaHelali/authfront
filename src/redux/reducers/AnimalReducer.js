import { GET_ALL_ANIMAL, GET_ANIMAL} from "../types/AnimalTypes";

const initialState = {
    Animal:null, 
    Animals : null,

 } ; 
 const AnimalReducer = (state = initialState, action )=>{
     switch (action.type) {
         case GET_ALL_ANIMAL:
           return {
               ...state , 
               Animals : action.payload.GetAnimals
           }  ;

        case GET_ANIMAL : 
        return {
            ...state , 
            Animal : action.payload.GetAnimal
        };
     
      
      default:
          return state;
     }
 }



 export default AnimalReducer ;