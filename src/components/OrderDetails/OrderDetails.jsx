import styles from "./OrderDetails.module.css";
import { useEffect } from 'react';
import imageSuccess from './imageSuccess.png';
import { useDispatch, useSelector } from "react-redux";
import { resetIngredient } from "../../store/entities/services/burgerConstructor/actions";

export const OrderDetails = () => { 
    
    const orderID = useSelector(store => store.order.orderID);
    const dispatch = useDispatch();

    useEffect(() => {     
        dispatch(resetIngredient());
      }, []);  
      
  
    return (
        <div className={styles.container}>
            <div className={styles.id}>{orderID?.order?.number}</div>
            <div className={styles.idText}>идентификатор заказа</div>
            <div className={styles.mark}><img src={imageSuccess} alt="Success" /></div>
            <div className={styles.cooking}>Ваш заказ начали готовить</div>
            <div className={styles.readiness}>Дождитесь готовности на орбитальной станции</div>
        </div>
    )
}


