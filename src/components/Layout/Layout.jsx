import { AppHeader } from "../Header/AppHeader";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import styles from "./Layout.module.css";

export const Layout = () => {
    return (
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />
        <BurgerIngredients className={styles.BurIngredients} />
        <BurgerConstructor  className={styles.BurConstructor} />
        <footer className={styles.footer}></footer>
      </div>
    );
  };