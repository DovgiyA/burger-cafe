import styles from './IngredientCards.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';

 
export const IngredientCards = ({ ingredientsID }) => { 

  const {ingredients} = useSelector(store => store.ingredientsReducer);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {ingredientsID}
})

const ingredientsArr = useSelector(store => store.dnd.ingredientsWithoutBuns);
const buns = useSelector(store => store.dnd.buns);
const counter = ingredientsArr.reduce((acc, item) => {
  if (item === ingredientsID) {
    return acc + 1;
  }
  return acc;
  }, 0);

    return(     
          <div className={styles.cardCrator} ref={dragRef}>       
            <img src={ingredients[ingredientsID].image} alt={ingredients[ingredientsID]._id}></img> 
            <div className={styles.price}>
            {ingredients[ingredientsID].price}    
            {<CurrencyIcon type="primary" />}  
            </div>     
            <span>{ingredients[ingredientsID].name}</span>
            {buns === ingredientsID 
            ? (<Counter count={1} size="default" extraClass="m-1" />) : counter 
            ? (<Counter count={counter} size="default" extraClass="m-1" />) : null}
          </div>     
    )
}

IngredientCards.propTypes = {  
  ingredientsID: PropTypes.string.isRequired
};