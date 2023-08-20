import styles from "./OrderDetails.module.css";
import PropTypes from 'prop-types';
import imageSuccess from './imageSuccess.png';


export const OrderDetails = ({orderID}) => {
  
    return (
        <div className={styles.container}>
            <div className={styles.id}>{orderID}</div>
            <div className={styles.idText}>идентификатор заказа</div>
            <div className={styles.mark}><img src={imageSuccess} alt="Success" /></div>
            <div className={styles.cooking}>Ваш заказ начали готовить</div>
            <div className={styles.readiness}>Дождитесь готовности на орбитальной станции</div>
        </div>
    )
}

OrderDetails.propTypes = {  
    orderID: PropTypes.number.isRequired
  };

