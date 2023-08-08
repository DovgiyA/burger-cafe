import { useContext, useState } from 'react';
import styles from './BurgerIngredients.module.css';
import classNames from 'classnames';
import { IngredientCards } from '../IngredientCards/ingredientCards';
import PropTypes from 'prop-types';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { Tabs } from '../Tabs/Tabs';
import { Modal } from '../Modal/Modal';
import { IngredientDetails } from '../IngredientDetails/IngredientDetails';
import { shape } from '../../utils/props-type';
import { DataContext } from '../../services/dataContext';


export const BurgerIngredients = ({className}) => {

  const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState('one');
    const [ingredient, setIngredient] = useState([]);
    const { data } = useContext(DataContext);

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
          <IngredientCards type={'bun'} />
        <h2 className={styles.h2}>Соусы</h2>
          <IngredientCards type={'sauce'} />
        <h2 className={styles.h2}>Начинки</h2>
          <IngredientCards type={'main'} />
      </section>    
        {ingredient.length && isOpen && (<Modal setIsOpen={setIsOpen}><ModalOverlay setIsOpen={setIsOpen} /><IngredientDetails setIsOpen={setIsOpen} data={ingredient} /></Modal>)}
    </div>
)}

BurgerIngredients.propTypes = {    
  data: PropTypes.arrayOf(shape),
  className: PropTypes.string.isRequired
};
 