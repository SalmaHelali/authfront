
import  axios  from 'axios';
import { GET_ALL_ANIMAL, GET_ANIMAL } from '../types/AnimalTypes';


//add

export const AddAnimal = ()=> async (dispatch)=>{
try {
    const res = await axios.post('/animal/AddAnimal' ) ;
    dispatch(GetAnimals())
        console.log(res.data)

} catch (error) {
    console.log(error)
    
}};

//get animal : id
export const GetAnimal=(id)=>async (dispatch)=> {
    try {
        const res = await axios.get(`/animal/GetAnimal/${id}`) ; 
        dispatch ({
            type :GET_ANIMAL,
            payload: res.data , 
        });
        console.log(res.data) ;

    } catch (error) {
        console.log(error);
        
    }
}

//getanimals

export const GetAnimals=()=>async(dispatch)=>{
    
    try {
        const res =await axios.get('/animal/GetAnimals' ) ;
        console.log(res.data)
        dispatch ({
            type: GET_ALL_ANIMAL , 
            payload : res.data ,
        })
        
    } catch (error) {
        console.log(error)
    
    }
}


//put animal : id

export const UpdateAnimals=(id)=>(dispatch)=>{
    try {
const res =axios.put(`/animal/UpdateAnimal/${id}`)

dispatch(GetAnimals())
    } catch (error) {
        console.log(error)
    }
}



export const DeleteAnimal=(id)=>async (dispatch)=>{
    try {
        const res= await axios.delete(`/animal/eleteAnimal/${id}`) ; 
        dispatch(GetAnimals())
        
    } catch (error) {
        console.log(error)
        
    }
}

