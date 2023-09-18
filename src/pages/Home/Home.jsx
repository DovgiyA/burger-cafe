import { AppHeader } from "../../components/Header/AppHeader";
import { BurgerIngredients } from "../../components/BurgerIngredients/BurgerIngredients";
import styles from "./Home.module.css";
import { BurgerConstructor } from "../../components/BurgerConstructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


export const HomePage = () => { 

    return (
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients className={styles.BurIngredients} />
          <BurgerConstructor  className={styles.BurConstructor} />
        </DndProvider>
      </div>
    );
  };

 