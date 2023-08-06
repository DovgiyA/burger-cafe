import { AppHeader } from "../Header/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import styles from "./Layout.module.css";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import PropTypes from 'prop-types';
import { shape } from "../../utils/props-type";

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
    data: PropTypes.arrayOf(shape)
  };