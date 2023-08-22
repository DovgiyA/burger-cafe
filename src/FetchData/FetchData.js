


export const FetchData = async (LOADING) => {

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