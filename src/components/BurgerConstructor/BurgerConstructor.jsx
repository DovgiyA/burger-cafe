import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerCardContainer } from '../BurgerCardContainer/BurgerCardContainer';
import { sendOrder } from '../../store/entities/services/sendOrder/actions';
import { NavLink, useLocation } from 'react-router-dom';


export const BurgerConstructor  = ({className}) => {

  const [isOpen, setIsOpen] = useState(false); 
  const ingredients = useSelector(store => store.ingredientsReducer.ingredients);
  

  const { buns, ingredientsWithoutBuns } = useSelector(store => store.dnd);

  const dispatch = useDispatch();
  let location = useLocation();
  
  useEffect(() => {
    dispatch(sendOrder(ingredientsWithoutBuns, buns));
  }, [isOpen]);  
  
 
    const totalPrice = () => {
      return ingredientsWithoutBuns.reduce((acc, item) => acc + ingredients[item?.ingredient]?.price, ingredients[buns].price*2)
    }

    return (    
    <div className={classNames(className, styles.container)}>
      <BurgerCardContainer />
      {buns && <div className={styles.ordersButton}>
        <span>    
          <span>{totalPrice()}</span>
          <CurrencyIcon type="primary" />
        </span>  
       <NavLink to={`/orders/ordersDetail`} state={{backgroundLocation: location}} ><Button htmlType="button" type="primary" size="large" onClick={() => setIsOpen(true)}>
           Оформить заказ
          </Button>
       </NavLink>              
      </div>}      
    </div>);  
  };

  BurgerConstructor.propTypes = {  
    className: PropTypes.string.isRequired
  };

  