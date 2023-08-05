import { AppHeader } from "../Header/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import styles from "./Layout.module.css";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import PropTypes from 'prop-types';

export const Layout = ({data}) => {

    return (
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />
        <BurgerIngredients className={styles.BurIngredients} data={data} />
        <BurgerConstructor  className={styles.BurConstructor} data={data} />
        <footer className={styles.footer}></footer>
      </div>
    );
  };

  Layout.propTypes = { 
    data: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number
    })) 
  };