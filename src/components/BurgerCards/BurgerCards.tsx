import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerCards.module.css';
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBun, sortIngredient } from '../../store/entities/services/burgerConstructor/actions';
import { useRef } from 'react';
import { BurgerCardsI, ingredientI } from '../../interfaces/interfases';


export const BurgerCards = ({ingredientsID, index}: BurgerCardsI): JSX.Element => {
    
    const ingredients = useSelector((store: any) => store.ingredientsReducer.ingredients);
    const dndIngredients = useSelector((store: any) => store.dnd.ingredientsWithoutBuns);
    const dispatch = useDispatch(); 
   
    const [, dragRef] = useDrag({
        type: "element",
        item: {ingredientsID, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
          }),
    });
    
    const moveCard = (id: string, dragIndex: number, hoverIndex: number) => {       
        const newArr = dndIngredients.map((ingredient: ingredientI) => ingredient.item) 
      
        newArr.splice(dragIndex, 1,);
        newArr.splice(hoverIndex, 0, id);

        const arr = dndIngredients.map((ingredient: ingredientI) => dndIngredients[newArr.indexOf(ingredient.item)])
           
        dispatch(sortIngredient(arr)); 
      };

    const [, dropRef] = useDrop<BurgerCardsI>({
        accept: "element",
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),       
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const id = item.ingredientsID.item;
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            moveCard(id, dragIndex, hoverIndex);
            item.index = hoverIndex;                       
        }
      });     
    
      const ref = useRef<HTMLSpanElement>(null)
    const dragDropRef: any = dragRef(dropRef(ref))
   
    return (
        <span className={styles.ingredient}  ref={dragDropRef} >
    <DragIcon type="primary" />
    <ConstructorElement         
      text={ingredients[ingredientsID.ingredient]?.name}
      price={ingredients[ingredientsID.ingredient]?.price}
      thumbnail={ingredients[ingredientsID.ingredient]?.image}
      handleClose={() => dispatch(deleteBun(ingredientsID))}
    /></span>
    )
}
