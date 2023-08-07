import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Tabs.module.css';
import PropTypes from 'prop-types';

export const Tabs = ({setCurrent, current}) => {

    return (
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
    )
}


Tabs.propTypes = {    
  setCurrent:  PropTypes.func.isRequired,
  current: PropTypes.string.isRequired
};