import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerCardContainer } from '../BurgerCardContainer/BurgerCardContainer';
import { sendOrder } from '../../store/entities/services/sendOrder/actions';
import { NavLink, useLocation } from 'react-router-dom';
import { ClassNameI, ingredientI } from '../../interfaces/interfases';
import { useModal } from '../../hooks/useModal';


export const BurgerConstructor  = ({className}: ClassNameI) => {

  const { isModalOpen, openModal, closeModal } = useModal(); 
  const ingredients = useSelector((store: any) => store.ingredientsReducer.ingredients);


  const { buns, ingredientsWithoutBuns } = useSelector((store: any) => store.dnd);

  const dispatch = useDispatch<any>();
  let location = useLocation();
  
  useEffect(() => {    
    closeModal();
    dispatch(sendOrder(ingredientsWithoutBuns, buns));    
  }, [isModalOpen]);  
  
 
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
       <NavLink to={`/orders/ordersDetail`} state={{backgroundLocation: location}} ><Button htmlType="button" type="primary" size="large" onClick={() => openModal()}>
           Оформить заказ
          </Button>
       </NavLink>              
      </div>}      
    </div>);  
  };
