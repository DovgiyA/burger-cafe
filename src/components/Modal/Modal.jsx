import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Modal.module.css';
import { useDispatch } from "react-redux";
import { deleteIngredient } from "../../store/entities/services/burgerIngredients/actions";


export const Modal = ({children, setIsOpen}) => {
  
  const dispatch = useDispatch();

    const onKey = (event) => {
       
        if (event.key === "Escape") {
          setIsOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", onKey);
    
        return () => {
          window.removeEventListener("keydown", onKey);
        };
      });    

      const modal = document.getElementById(
        'modals'
    );
    
    return createPortal(
      (<div>
        <ModalOverlay setIsOpen={setIsOpen} />
        <div className={styles.close} >
        <CloseIcon type="primary" onClick={() => {
                    setIsOpen(false);
                    dispatch(deleteIngredient())
                    }} />
        </div>
        {children}
      </div>),
        modal
    ); 
}

Modal.propTypes = {    
    children: PropTypes.arrayOf(PropTypes.element.isRequired),
    setIsOpen:  PropTypes.func.isRequired,
  };