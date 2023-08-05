import styles from './BurgerCards.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

 
export const BurgerCards = (props) => {

    return(
        <div className={styles.ingredients}>
        {props.data && props.data.map(item => item.type === props.type ? 
        (<div key={item._id} className={styles.cardCrator}>       
          <img src={item.image} alt={item.name}></img> 
          <div className={styles.price}>
          {item.price}    
          {<CurrencyIcon type="primary" />}  
          </div>     
          <span>{item.name}</span>
        </div>) : null)} 
        </div>
    )
}