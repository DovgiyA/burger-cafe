import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerCardContainer.module.css';
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { dragBun, dragIngredient } from '../../store/entities/services/burgerConstructor/actions';
import { BurgerCards } from '../BurgerCards/BurgerCards';


export const BurgerCardContainer = () => { 
  
  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.ingredientsReducer.ingredients);
  const { buns, ingredientsWithoutBuns } = useSelector(store => store.dnd);

  const [, drop] = useDrop({
    accept: "ingredient",
    collect: monitor => ({
        isHover: monitor.isOver(),
    }),
    drop(itemId) {
      ingredients[itemId.ingredientsID].type === 'bun' ? dispatch(dragBun(itemId.ingredientsID)) : dispatch(dragIngredient(itemId.ingredientsID));
    },
  });      
  
    return (<div className={styles.container} ref={drop} >
        <div className={styles.buns} >{buns && <ConstructorElement
        type="top"
        isLocked={true}
        text={ingredients[buns]?.name + ' (верх)'}
        price={ingredients[buns]?.price}
        thumbnail={ingredients[buns]?.image}
      />}</div>
      <div className={styles.card} >    
        {ingredientsWithoutBuns?.map((ingredientsID, index) => <BurgerCards key={index} ingredientsID={ingredientsID} index={index} />)}        
      </div>
      <div className={styles.buns}>        
       {buns && <ConstructorElement
        type="bottom"
        isLocked={true}
        text={ingredients[buns]?.name + ' (низ)'} 
        price={ingredients[buns]?.price}
        thumbnail={ingredients[buns]?.image}
      />}</div>
    </div>)
}