import styles from "./AppHeader.module.css";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";


export const  AppHeader  = ({className}) => {
    return (<div className={className}>
      <header className={styles.main}>       
          <span className={styles.constructor}>
            <BurgerIcon type="primary" />
            <NavLink to="/" className={styles.link}>
            Конструктор
            </NavLink>
          </span>
          <span className={styles.orders}>
            <ListIcon type="primary" />
            <NavLink to="/" className={styles.link}>
            Лента заказов
            </NavLink>
          </span>
          <span className={styles.logo}><Logo /></span>
          <span className={styles.account}>
            <ProfileIcon type="primary" />
            <NavLink to="/" className={styles.link}>
            Личный кабинет
            </NavLink>
          </span>        
       
      </header>
      </div>);
  };

  AppHeader.propTypes = { 
    className: PropTypes.string.isRequired
  };