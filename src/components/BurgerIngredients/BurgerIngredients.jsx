import { useState } from 'react';
import styles from './BurgerIngredients.module.css';
import classNames from 'classnames';
import { BurgerCards } from '../BurgerCards/BurgerCards';
import PropTypes from 'prop-types';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { Tabs } from '../Tabs/Tabs';
import { Modal } from '../Modal/Modal';
import { IngredientDetails } from '../IngredientDetails/IngredientDetails';
import { shape } from '../../utils/props-type';


export const BurgerIngredients = ({className, data}) => {

  const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState('one');
    const [ingredient, setIngredient] = useState([])

    const clickHandler = (event) => {     
      setIngredient(data.filter(item => item.name === event.target.alt ? item : null));
      setIsOpen(true);            
    }
  
    return (
    <div className={classNames(className, styles.container)} >
        <h1 className={styles.h1}>Соберите бургер</h1>
        <Tabs current={current} setCurrent={setCurrent} /> 
      <section className={styles.scrollBar} onClick={clickHandler}>
        <h2 className={styles.h2}>Булки</h2> 
          <BurgerCards type={'bun'} data={data} />
        <h2 className={styles.h2}>Соусы</h2>
          <BurgerCards type={'sauce'} data={data} />
        <h2 className={styles.h2}>Начинки</h2>
          <BurgerCards type={'main'} data={data} />
      </section>    
        {ingredient.length && isOpen && (<Modal setIsOpen={setIsOpen}><ModalOverlay setIsOpen={setIsOpen} /><IngredientDetails setIsOpen={setIsOpen} data={ingredient} /></Modal>)}
    </div>
)}

BurgerIngredients.propTypes = {    
  data: PropTypes.arrayOf(shape),
  className: PropTypes.string.isRequired
};
 