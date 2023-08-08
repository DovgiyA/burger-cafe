import { AppHeader } from "../Header/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import styles from "./Layout.module.css";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";


export const Layout = () => {

    return (
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />
        <BurgerIngredients className={styles.BurIngredients} />
        <BurgerConstructor  className={styles.BurConstructor}  />
        <footer className={styles.footer}></footer>
      </div>
    );
  };

 