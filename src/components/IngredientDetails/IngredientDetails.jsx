import styles from "./IngredientDetails.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { shape } from "../../utils/props-type";


export const IngredientDetails = ({setIsOpen, data}) => {

    return (
        (<div className={styles.container} >
            <div className={styles.wrapper}>
                <span className={styles.header}>Детали ингредиента</span>
                <CloseIcon type="primary" onClick={() => setIsOpen(false)} />
            </div>            
            <div className={styles.img}><img src={data[0].image_large} alt="Ингредиент" /></div>
            <div className={styles.name}>{data[0].name}</div>
            <div className={styles.macronutrients}>
                <div>
                    <div className={styles.gap}>Калории,ккал</div>
                    <div>{data[0].calories}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Белки, г</div>
                    <div>{data[0].proteins}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Жиры, г</div>
                    <div>{data[0].fat}</div>
                </div>
                <div>
                    <div  className={styles.gap}>Углеводы, г</div>
                    <div>{data[0].carbohydrates}</div>
                </div>
               
            </div>
        </div>)
    )
}

IngredientDetails.propTypes = {    
    data: PropTypes.arrayOf(shape),
      setIsOpen:  PropTypes.func.isRequired,
  };