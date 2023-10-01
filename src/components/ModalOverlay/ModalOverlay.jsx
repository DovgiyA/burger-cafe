import styles from './ModalOverlay.module.css';


export const ModalOverlay = ({onClick}) => { 
    
  
    
    return (
        <div className={styles.overlay } onClick={onClick} ></div>
    )
}

