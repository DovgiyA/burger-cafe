import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Tabs.module.css';


interface PropsI {
  current: string;
  setCurrent: (arg: string) => void;
}

export const Tabs = ({ current, setCurrent}: PropsI) => {

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