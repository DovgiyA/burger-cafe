import styles from "./IngredientDetails.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { deleteIngredient } from "../../store/entities/services/burgerIngredients/actions";



export const IngredientDetails = ({setIsOpen}) => {

    const dispatch = useDispatch();
    const currentIngredient = useSelector(store => store.currentIngredientsReducer.currentIngredientIDs);
    const {ingredients} = useSelector(store => store.ingredientsReducer);

    return (
        (<div className={styles.container} >
            <div className={styles.wrapper}>
                <span className={styles.header}>Детали ингредиента</span>
                <CloseIcon type="primary" onClick={() => {
                    setIsOpen(false);
                    dispatch(deleteIngredient())
                    }} />
            </div>            
            <div className={styles.img}><img src={ingredients[currentIngredient].image_large} alt="Ингредиент" /></div>
            <div className={styles.name}>{ingredients[currentIngredient].name}</div>
            <div className={styles.macronutrients}>
                <div>
                    <div className={styles.gap}>Калории,ккал</div>
                    <div>{ingredients[currentIngredient].calories}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Белки, г</div>
                    <div>{ingredients[currentIngredient].proteins}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Жиры, г</div>
                    <div>{ingredients[currentIngredient].fat}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Углеводы, г</div>
                    <div>{ingredients[currentIngredient].carbohydrates}</div>
                </div>
               
            </div>
        </div>)
    )
}

IngredientDetails.propTypes = { 
    setIsOpen:  PropTypes.func.isRequired,
  };