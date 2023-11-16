import { useState, useEffect, useRef } from 'react';
import styles from './BurgerIngredients.module.css';
import { IngredientCards } from '../IngredientCards/ingredientCards';
import { Tabs } from '../Tabs/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIngredient, putIngredient } from '../../store/entities/services/burgerIngredients/actions';
import { ClassNameI } from '../../interfaces/interfases';



export const BurgerIngredients = ({className}: ClassNameI) => {

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const {ingredients, ingredientsIDs} = useSelector((store: any) => store.ingredientsReducer);
  const [current, setCurrent] = useState('one');
 

  const bunsRef = useRef<HTMLHeadingElement | null>(null);
  const souceRef = useRef<HTMLHeadingElement | null>(null);
  const mainRef = useRef<HTMLHeadingElement | null>(null);  

  useEffect(() => {
    if (!isOpen) {
      dispatch(deleteIngredient())
    }  
   
  }, [isOpen, dispatch]);


const R = (e: React.SyntheticEvent): void => {
  let scrollTop = e.currentTarget.scrollTop;
  //@ts-ignore  
  if (scrollTop > bunsRef.current?.getBoundingClientRect().bottom && scrollTop < souceRef.current?.getBoundingClientRect().bottom) {
    setCurrent('one')
  }
  //@ts-ignore  
  if (scrollTop > souceRef.current?.getBoundingClientRect().bottom && scrollTop < mainRef.current?.getBoundingClientRect().bottom) {
    setCurrent('two')
  }
  //@ts-ignore  
  if (scrollTop > mainRef.current?.getBoundingClientRect().bottom) {
    setCurrent('three')
  }
}

  const clickHandler = (event: React.SyntheticEvent): void => {  
    //@ts-ignore   
      const selectedIngredient = event.target.alt;
      dispatch(putIngredient(selectedIngredient))      
      setIsOpen(true);  
    }     
  
    return (
    <div className={className} >
        <h1 className={styles.h1}>Соберите бургер</h1>
        <Tabs current={current} setCurrent={setCurrent} />         
      <div className={styles.scrollBar} onScroll={R} >
          <h2 className={styles.h2} ref={bunsRef}>Булки</h2> 
          <section className={styles.section} onClick={clickHandler}>                
            {ingredientsIDs.map((item: string) => ingredients[item].type === 'bun' ? (<IngredientCards key={item} ingredientsID={item} />) : null)}        
          </section>
          <h2 className={styles.h2} ref={souceRef}  >Соусы</h2> 
          <section className={styles.section} onClick={clickHandler} >                     
            {ingredientsIDs.map((item: string) => ingredients[item].type === 'sauce' ? (<IngredientCards key={item} ingredientsID={item} />) : null)}
          </section>
          <h2 className={styles.h2} ref={mainRef} >Начинки</h2>    
          <section className={styles.section} onClick={clickHandler} >               
            {ingredientsIDs.map((item: string) => ingredients[item].type === 'main' ? (<IngredientCards key={item} ingredientsID={item} />) : null)}
          </section>
        </div>          
    </div>
)}

