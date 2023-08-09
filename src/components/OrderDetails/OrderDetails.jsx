import styles from "./OrderDetails.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import imageSuccess from './imageSuccess.png';


export const OrderDetails = ({setIsOpen, ordersID}) => {

    return (
        <div className={styles.container}>
            <div className={styles.close} ><CloseIcon type="primary" onClick={() => setIsOpen(false)} /></div>
            <div className={styles.id}>{ordersID}</div>
            <div className={styles.idText}>идентификатор заказа</div>
            <div className={styles.mark}><img src={imageSuccess} alt="Success" /></div>
            <div className={styles.cooking}>Ваш заказ начали готовить</div>
            <div className={styles.readiness}>Дождитесь готовности на орбитальной станции</div>
        </div>
    )
}

OrderDetails.propTypes = {    
    setIsOpen:  PropTypes.func.isRequired,
    ordersID: PropTypes.number.isRequired
  };

