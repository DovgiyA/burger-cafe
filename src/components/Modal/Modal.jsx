import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';


export const Modal = ({children, setIsOpen}) => {

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
    
    return createPortal(
        children,
        document.body
    ); 
}

Modal.propTypes = {    
    children: PropTypes.arrayOf(PropTypes.element.isRequired),
    setIsOpen:  PropTypes.func.isRequired,
  };