import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';


export const ModalOverlay = ({setIsOpen}) => {   
    
    return (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} ></div>
    )
}

ModalOverlay.propTypes = {    
    setIsOpen:  PropTypes.func.isRequired,
  };