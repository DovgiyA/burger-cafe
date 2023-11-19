import styles from './ModalOverlay.module.css';

interface OnclickI {
    onClick: () => void
}

export const ModalOverlay = ({onClick}: OnclickI) => { 
    
  
    
    return (
        <div className={styles.overlay } onClick={onClick} ></div>
    )
}

