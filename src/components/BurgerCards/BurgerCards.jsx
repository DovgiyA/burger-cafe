import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerCards.module.css';
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBun, sortIngredient } from '../../store/entities/services/burgerConstructor/actions';
import { useRef } from 'react';
import PropTypes from 'prop-types';


export const BurgerCards = ({ingredientsID, index}) => {
    
    const ingredients = useSelector(store => store.ingredientsReducer.ingredients);
    const dndIngredients = useSelector(store => store.dnd.ingredientsWithoutBuns);
    const dispatch = useDispatch(); 
   
    const [, dragRef] = useDrag({
        type: "element",
        item: {ingredientsID, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
          }),
    });
    
    const moveCard = (id, dragIndex, hoverIndex) => {       
        const newArr = [...dndIngredients]
        newArr.splice(dragIndex, 1,);
        newArr.splice(hoverIndex, 0, id);

        dispatch(sortIngredient(newArr)); 
      };

    const [, dropRef] = useDrop({
        accept: "element",
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),       
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const id = item.ingredientsID;
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            moveCard(id, dragIndex, hoverIndex);
            item.index = hoverIndex;                       
        }
      });     

      const ref = useRef(null)
    const dragDropRef = dragRef(dropRef(ref))
   
    return (
        <span className={styles.ingredient}  ref={dragDropRef} >
    <DragIcon type="primary" />
    <ConstructorElement         
      text={ingredients[ingredientsID]?.name}
      price={ingredients[ingredientsID]?.price}
      thumbnail={ingredients[ingredientsID]?.image}
      handleClose={() => dispatch(deleteBun(ingredientsID))}
    /></span>
    )
}

BurgerCards.propTypes = {    
    ingredientsID: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  };