import { useSelector } from "react-redux";
import styles from "./IngredientDetails.module.css";


export const IngredientDetails = () => {
  
    const currentIngredient = useSelector(store => store.currentIngredientsReducer.currentIngredientIDs);
    const {ingredients} = useSelector(store => store.ingredientsReducer);

    return (
        (<div className={styles.container} >
            <div className={styles.wrapper}>
                <span className={styles.header}>Детали ингредиента</span>                
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
