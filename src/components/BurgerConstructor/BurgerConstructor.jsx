import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { OrderDetails } from '../OrderDetails/OrderDetails';


export const BurgerConstructor  = ({className, data}) => {
  const [isOpen, setIsOpen] = useState(false);

    return (    
    <div className={classNames(className, styles.container)}>
      <div className={styles.buns}><ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      /></div>
    <div className={styles.card}>    
    {data && data.map(item => <span className={styles.ingredient} key={item._id}><DragIcon type="primary" />
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
        <Button htmlType="button" type="primary" size="large" onClick={() => setIsOpen(true)}>
           Оформить заказ
        </Button>
        {isOpen && <ModalOverlay setIsOpen={setIsOpen} />}
        {isOpen && (<Modal setIsOpen={setIsOpen}><OrderDetails setIsOpen={setIsOpen} /></Modal>)}       
    </div>
    </div>);  
  };

  BurgerConstructor.propTypes = {    
    data: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number
    })) 
  };
