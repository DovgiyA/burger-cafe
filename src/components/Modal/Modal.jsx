import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Modal.module.css';



export const Modal = ({children, onClick}) => {
  
    

    useEffect(() => {
      const onKey = (event) => {
       
        if (event.key === "Escape") {
          onClick();
        }
      }
        window.addEventListener("keydown", onKey);
    
        return () => {
          window.removeEventListener("keydown", onKey);
        };
      }, []);    

      const modal = document.getElementById(
        'modals'
    );
    
    return createPortal(
      (<div>
        <ModalOverlay onClick={onClick} />
      
        <div>
        {children}
          <span className={styles.close}><CloseIcon type="primary" onClick={onClick} /></span>      
        </div>
            
      </div>),
        modal
    ); 
}

Modal.propTypes = {    
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
  };