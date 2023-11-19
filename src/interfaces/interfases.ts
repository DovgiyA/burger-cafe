export interface ClassNameI {
    className: string
}

export interface ingredientI {
    item: string;
    ingredient: string;
 } 

 export interface BurgerCardsI {
    ingredientsID: {item: string; ingredient: string;}
    index: number;
}

export interface propsI {
    email: string; 
    password: string;
    name: string;
    token: string;
}

export interface ingredientsI {
    ingredient: {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price:number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
    };
     item: string
}