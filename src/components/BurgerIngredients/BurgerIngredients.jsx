import { useState } from 'react';
import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import { BurgerCards } from '../BurgerCards/BurgerCards';
import PropTypes from 'prop-types';


export const BurgerIngredients = (props) => {
    const [current, setCurrent] = useState('one');
  
    return (<div className={classNames(props.className, styles.container)}>
    <h1 className={styles.h1}>Соберите бургер</h1>
    <div className={styles.tabContainer}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>   
    <section className={styles.scrollBar}>
      <h2 className={styles.h2}>Булки</h2> 
        <BurgerCards />
      <h2 className={styles.h2}>Соусы</h2>
        <BurgerCards />
      <h2 className={styles.h2}>Начинки</h2>
        <BurgerCards />
    </section>     
    </div>
)}

BurgerIngredients.propTypes = {
  orderId: PropTypes.number
};
 