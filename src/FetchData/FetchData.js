import { LOADING } from "../constants/constants";


export const FetchData = async () => {


    try {
        const loader = await fetch(LOADING);
        const result = await loader.json();

            if (loader.ok) {                
                return result.data;
            } else {
                alert("Ошибка: " + result.status);
            }      

    } catch(e) {
        console.log(e);
    }
   
}