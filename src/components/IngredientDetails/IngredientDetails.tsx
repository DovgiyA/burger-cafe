import { useSelector } from "react-redux";
import styles from "./IngredientDetails.module.css";
import { useParams } from "react-router-dom";




export const IngredientDetails = () => {
  
    const {ingredients} = useSelector((store: any) => store.ingredientsReducer);
    const {ingredientsID} = useParams();

    return ( 
        ingredientsID ? <div className={styles.container} >
            <div className={styles.wrapper}>
                <span className={styles.header}>Детали ингредиента</span>                
            </div>            
            <div className={styles.img}><img src={ingredients[ingredientsID].image_large} alt="Ингредиент" /></div>
            <div className={styles.name}>{ingredients[ingredientsID]?.name}</div>
            <div className={styles.macronutrients}>
                <div>
                    <div className={styles.gap}>Калории,ккал</div>
                    <div>{ingredients[ingredientsID].calories}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Белки, г</div>
                    <div>{ingredients[ingredientsID].proteins}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Жиры, г</div>
                    <div>{ingredients[ingredientsID].fat}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Углеводы, г</div>
                    <div>{ingredients[ingredientsID].carbohydrates}</div>
                </div>               
            </div>
        </div>
    : null)
}
