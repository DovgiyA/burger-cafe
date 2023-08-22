import { AppHeader } from "../Header/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import styles from "./Layout.module.css";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { useDispatch } from "react-redux";
import { getIngredients } from "../../store/entities/services/ingredients/actions";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


export const Layout = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

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

 