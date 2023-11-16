import { SENDING } from "../constants/constants";
import { ingredientI } from "../interfaces/interfases";
import { request } from "../utils/request";



export const sendData = async (ingredientsWithoutBuns: Array<ingredientI>, buns: string) => {

    if (!ingredientsWithoutBuns.length) {    
      return;
    }

    const ordersData = ingredientsWithoutBuns.reduce((acc, order) => [...acc, order.ingredient], [buns]);
       
    return await request(SENDING, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ingredients: ordersData}),
    }); 
  }

