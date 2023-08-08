import { LOADING } from "../constants/constants";


export const FetchData = async () => {

    try {
        const loader = await fetch(LOADING);
        const result = await loader.json();

            if (loader.ok) {                
                return result.data;
            }      

    } catch(e) {
        return Promise.reject(e);
    }
   
}