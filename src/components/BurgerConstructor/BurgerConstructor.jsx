import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import { shape } from '../../utils/props-type';
import { DataContext } from '../../services/dataContext';
import { BurgerCard } from '../BurgerCard/BurgerCard';
import { reducer } from '../../services/reducers';
import { sendData } from '../../sendData/sendData';


export const BurgerConstructor  = ({className}) => {

  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState, undefined);

  const [ordersID, setOrdersID] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useContext(DataContext); 

    const findBun = useMemo(() => {  
      if (!data.length) {
        return {};
      }  
      return data?.find(item => item.type === 'bun');      
    }, [data]); 
    
    const ingredientsWithoutBuns = useMemo(() => {     
      return data?.filter(item => item.type !== 'bun');
    }, [data]);   

    useEffect(() => {              
      dispatch({type: 'set', payload: ingredientsWithoutBuns?.reduce((acc, item) => acc + item.price, 0)});        
    }, [data]);  
    
    useEffect(() => {

      const arr = data?.map(item => item._id);   
      const jsonForSending = JSON.stringify({ingredients: arr});

      const responce = async () => {
        const result = await sendData(jsonForSending);       
        setOrdersID(result?.order.number);
      }    

      responce();
      
    }, [data]);

    return (    
    <div className={classNames(className, styles.container)}>
      <BurgerCard bun={findBun} filteredData={ingredientsWithoutBuns} />
      <div className={styles.ordersButton}>
        <span>    
          <span>{state.count}</span>
          <CurrencyIcon type="primary" />
        </span>  
        <Button htmlType="button" type="primary" size="large" onClick={() => setIsOpen(true)}>
           Оформить заказ
        </Button>     
        {isOpen && (<Modal setIsOpen={setIsOpen}><ModalOverlay setIsOpen={setIsOpen} /><OrderDetails setIsOpen={setIsOpen} ordersID={ordersID} /></Modal>)}       
    </div>
    </div>);  
  };

  BurgerConstructor.propTypes = {    
    data: PropTypes.arrayOf(shape),
    className: PropTypes.string.isRequired
  };
