import { createPortal } from 'react-dom';
import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';


export const ModalOverlay = ({setIsOpen}) => {   
    
    return createPortal(
        <div className={styles.overlay} onClick={() => setIsOpen(false)} ></div>, document.body
    )
}

ModalOverlay.propTypes = {    
    setIsOpen:  PropTypes.func,
  };