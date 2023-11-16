import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './Modal.module.css';

interface ModalI {
  children?: React.ReactNode;
  onClick: () => void;
}

export const Modal = ({children, onClick}: ModalI): JSX.Element => {    

    useEffect(() => {
      const onKey = (event: KeyboardEvent) => {
       
        if (event.key === "Escape") {
          onClick();
        }
      }
        window.addEventListener("keydown", onKey);
    
        return () => {
          window.removeEventListener("keydown", onKey);
        };
      }, []);    

      const modal: Element | null = document.getElementById('modals');
      
    return createPortal(
      (<div>
        <ModalOverlay onClick={onClick} />
      
        <div>
        {children}
          <span className={styles.close}><CloseIcon type="primary" onClick={onClick} /></span>      
        </div>
            
      </div>),
      //@ts-ignore
        modal
    ); 
}

