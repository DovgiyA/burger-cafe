import styles from "./OrderDetails.module.css";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';


export const OrderDetails = ({setIsOpen}) => {

    return (
        <div className={styles.container}>
            <div className={styles.close} ><CloseIcon type="primary" onClick={() => setIsOpen(false)} /></div>
            <div className={styles.id}>034536</div>
            <div className={styles.idText}>идентификатор заказа</div>
            <div className={styles.mark}><img src="../../public/images/graphics.png" alt="Successe" /></div>
            <div className={styles.cooking}>Ваш заказ начали готовить</div>
            <div className={styles.readiness}>Дождитесь готовности на орбитальной станции</div>
        </div>
    )
}

OrderDetails.propTypes = {    
    setIsOpen:  PropTypes.func,
  };