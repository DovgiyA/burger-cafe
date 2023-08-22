import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Tabs.module.css';
import PropTypes from 'prop-types';


export const Tabs = ({ current, setCurrent}) => {

  return (
    <div className={styles.tabContainer}>
      <Tab value="one" active={current === 'one'} onClick={() => setCurrent('one')}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={() => setCurrent('two')}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={() => setCurrent('three')}>
        Начинки
      </Tab>
    </div>   
    )
}


Tabs.propTypes = {    
  setCurrent:  PropTypes.func.isRequired,
  current: PropTypes.string.isRequired
};