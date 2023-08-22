const checkResponse = (res) => {
    if (res.ok) {          
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const request = (url, options) => fetch(url, options).then(checkResponse).then((result) => result); 

