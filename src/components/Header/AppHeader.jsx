import styles from "./AppHeader.module.css";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";


export const  AppHeader  = ({className}) => {
    return (<div className={className}>
      <header className={styles.main}>       
          <span className={styles.constructor}>
            <BurgerIcon type="primary" />
            <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? styles.pending : isActive ? styles.active : styles.pending} >
            <span className={styles.link}>Конструктор</span>
            </NavLink>
          </span>
          <span className={styles.orders}>
            <ListIcon type="primary" />
            <NavLink to="feed" className={({ isActive, isPending }) =>
    isPending ? styles.pending : isActive ? styles.active : styles.pending }>
            <span className={styles.link}>Лента заказов</span>
            </NavLink>
          </span>
          <span className={styles.logo}><Logo /></span>
          <span className={styles.account}>
            <ProfileIcon type="primary" />
            <NavLink to="/profile" className={({ isActive, isPending }) =>
    isPending ? styles.pending : isActive ? styles.active : styles.pending }>
            <span className={styles.link}>Личный кабинет</span>
            </NavLink>
          </span>        
       
      </header>
      </div>);
  };

  AppHeader.propTypes = { 
    className: PropTypes.string.isRequired
  };