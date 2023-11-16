import styles from './IngredientCards.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

interface ingredientsIDI {
  ingredientsID: string
}
 
export const IngredientCards = ({ ingredientsID }: ingredientsIDI) => { 

  const {ingredients} = useSelector((store: any) => store.ingredientsReducer);
  let location = useLocation();
  const ingredientsArr = useSelector((store: any) => store.dnd.ingredientsWithoutBuns);
  const buns = useSelector((store: any) => store.dnd.buns);
  const [counter, setCounter] = useState(0);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {ingredientsID}
})

useEffect(() => {
  setCounter([{ingredient: buns}, ...ingredientsArr].reduce((acc, item) => {
    if (item.ingredient === ingredientsID) {
      return acc + 1;
    }
    return acc;
    }, 0));
  
}, [ingredientsArr, buns]);

    return( 
        <NavLink to={`/ingredients/${ingredientsID}`} className={({ isActive, isPending }) =>
        isPending ? styles.pending : isActive ? styles.active : styles.pending} state={{backgroundLocation: location}} >
          <div className={styles.cardCrator} ref={dragRef}>       
            <img src={ingredients[ingredientsID].image} alt={ingredients[ingredientsID]._id}></img> 
            <div className={styles.price}>
            {ingredients[ingredientsID].price}    
            {<CurrencyIcon type="primary" />}  
            </div>     
            <span>{ingredients[ingredientsID].name}</span>
            {counter ? (<Counter count={counter} size="default" extraClass="m-1" />) : null}
          </div>  
        </NavLink>   
    )
}

