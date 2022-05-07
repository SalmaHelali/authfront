
import { GET_ADOPT } from '../types/AdoptType';
import axios from 'axios';


export const GetAdoptAnimal=(id)=>async (dispatch)=> {

const config ={
    headers:{
        authorization:localStorage.getItem('token')
    }
}

    try {
        const res = await axios.get(`/animal/GetAdoptAnimal/${id}`,config) ; 
        console.log("data",res.data)
        dispatch ({
            type :GET_ADOPT,
            payload: res.data , 
        });
        console.log(res.data) ;

    } catch (error) {
        console.log(error);
        
    }
}