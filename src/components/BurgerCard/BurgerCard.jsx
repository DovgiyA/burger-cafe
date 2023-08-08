import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerCard.module.css';
import PropTypes from 'prop-types';
import { shape } from '../../utils/props-type';

export const BurgerCard = ({bun, filteredData}) => {   
  
    return (<>
        <div className={styles.buns}><ConstructorElement
        type="top"
        isLocked={true}
        text={bun?.name + ' (верх)'}
        price={bun?.price}
        thumbnail={bun?.image}
      /></div>
    <div className={styles.card}>    
    {filteredData?.map(item => <span className={styles.ingredient} key={item._id}><DragIcon type="primary" />
    <ConstructorElement         
      text={item.name}
      price={item.price}
      thumbnail={item.image}
    /></span>)}        
      </div>
      <div className={styles.buns}>        
        <ConstructorElement
        type="bottom"
        isLocked={true}
        text={bun?.name + ' (низ)'} 
        price={bun?.price}
        thumbnail={bun?.image}
      /></div>
    </>)
}

BurgerCard.propTypes = {    
  filteredData: PropTypes.arrayOf(shape).isRequired,
  bun: PropTypes.object.isRequired
};