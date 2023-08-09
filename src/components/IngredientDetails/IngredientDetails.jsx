import styles from "./IngredientDetails.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { shape } from "../../utils/props-type";



export const IngredientDetails = ({setIsOpen, ingredient}) => {
    console.log(ingredient)
   

    return (
        (<div className={styles.container} >
            <div className={styles.wrapper}>
                <span className={styles.header}>Детали ингредиента</span>
                <CloseIcon type="primary" onClick={() => setIsOpen(false)} />
            </div>            
            <div className={styles.img}><img src={ingredient.image_large} alt="Ингредиент" /></div>
            <div className={styles.name}>{ingredient.name}</div>
            <div className={styles.macronutrients}>
                <div>
                    <div className={styles.gap}>Калории,ккал</div>
                    <div>{ingredient.calories}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Белки, г</div>
                    <div>{ingredient.proteins}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Жиры, г</div>
                    <div>{ingredient.fat}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Углеводы, г</div>
                    <div>{ingredient.carbohydrates}</div>
                </div>
               
            </div>
        </div>)
    )
}

IngredientDetails.propTypes = {    
    ingredient: shape,
    setIsOpen:  PropTypes.func.isRequired,
  };