import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { fixtures } from '../../constants/fixtures';
import styles from './BurgerConstructor.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';


export const BurgerConstructor  = (props) => {
    return (    
    <div className={classNames(props.className, styles.container)}>
      <div className={styles.buns}><ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      /></div>
    <div className={styles.card}>    
    {fixtures.map(item => <span className={styles.ingredient} key={item._id}><DragIcon type="primary" />
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
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      /></div>
      <div className={styles.ordersButton}>
        <span>    
          <span>610</span>
          <CurrencyIcon type="primary" />
        </span>  
        <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
    </div>);  
  };

  BurgerConstructor.propTypes = {
    orderId: PropTypes.number
  };