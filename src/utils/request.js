import { REFRESH } from "../constants/constants";

const checkResponse = (res) => {
    if (res.ok) {          
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const request = (url, options) => fetch(url, options).then(checkResponse).then((result) => result); 

const refresh = async () => {    
    const responce = await fetch(REFRESH, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({token: localStorage.getItem("refreshToken")}),           
          });      
        return await checkResponse(responce);    
}

export const fetchWithRefresh = async (url, options) => {
    try {     
        const responce = await fetch(url, options);      
        return await checkResponse(responce);
    }catch(err){
        console.log(err)
            const refreshedToken = await refresh();
            localStorage.setItem("accessToken", refreshedToken.accessToken);
            localStorage.setItem("refreshToken", refreshedToken.refreshToken);

            options.headers.authorization = refreshedToken.accessToken;
            const result = await fetch(url, options);
            return await checkResponse(result);              
    }    
}