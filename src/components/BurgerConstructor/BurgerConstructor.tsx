import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerCardContainer } from '../BurgerCardContainer/BurgerCardContainer';
import { sendOrder } from '../../store/entities/services/sendOrder/actions';
import { NavLink, useLocation } from 'react-router-dom';
import { ClassNameI, ingredientI } from '../../interfaces/interfases';


export const BurgerConstructor  = ({className}: ClassNameI) => {

  const [isOpen, setIsOpen] = useState(false); 
  const ingredients = useSelector((store: any) => store.ingredientsReducer.ingredients);


  const { buns, ingredientsWithoutBuns } = useSelector((store: any) => store.dnd);

  const dispatch = useDispatch<any>();
  let location = useLocation();
  
  useEffect(() => {
    
    dispatch(sendOrder(ingredientsWithoutBuns, buns));
  }, [isOpen]);  
  
 
    const totalPrice = () => {
      return ingredientsWithoutBuns.reduce((acc: number, item: ingredientI) => acc + ingredients[item?.ingredient]?.price, ingredients[buns].price*2)
    }

    return (    
    <div className={classNames(className, styles.container)}>
      <BurgerCardContainer />
      {buns && <div className={styles.ordersButton}>
        <span>    
          <span>{totalPrice()}</span>
          <CurrencyIcon type="primary" />
        </span>  
       <NavLink to={`/orders/ordersDetail`} state={{backgroundLocation: location}} ><Button htmlType="button" type="primary" size="large" onClick={() => setIsOpen(!isOpen)}>
           Оформить заказ
          </Button>
       </NavLink>              
      </div>}      
    </div>);  
  };
