import { LOADING } from "../constants/constants";


export const FetchData = async () => {


    try {
        const loader = await fetch(LOADING);
        const result = await loader.json();
       
        return result.data;

    } catch(e) {
        console.log(e);
    }
   
}