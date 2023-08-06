import styles from './BurgerCards.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { shape } from '../../utils/props-type';

 
export const BurgerCards = ({type, data}) => {

    return(
        <div className={styles.ingredients}>
        {data && data.map(item => item.type === type ? 
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

BurgerCards.propTypes = {    
  data: PropTypes.arrayOf(shape),
  type: PropTypes.string.isRequired
};