import axios from 'axios';
import { GET_ERRORS } from './types';

export const createProject =  async (project, history, dispatch) => {

    try {
         const res = await axios.post("http://localhost:8000/api/project",project);
         history.pushState("/dashboard")
    }
    catch(error){

        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })

    }

}