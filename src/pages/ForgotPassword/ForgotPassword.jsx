import { useDispatch } from "react-redux";
import { AppHeader } from "../../components/Header/AppHeader";
import styles from "./ForgotPassword.module.css";
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { checkEmail } from "../../store/entities/services/checkEmail/actions";
import { CHECK } from "../../constants/constants";


export default function ForgotPasswordPage() {

  const [value, setValue] = useState({});
  const onSubmit = e => {
    setValue({email: e.target.value});
  }

  const dispatch = useDispatch();

  const onClick = e => {
    dispatch(checkEmail(CHECK, value));
  } 

    return (<>
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />      
      </div>
      <div className={styles.container}>
        <h1 className={styles.entrance}>Восстановление пароля</h1>    
        <span className={styles.input}><EmailInput onSubmit={onSubmit} placeholder={'Укажите e-mail'}/></span>  
        <NavLink to='/reset-password' className={styles.input}><Button onClick={onClick} >Восстановить</Button></NavLink>         
        <div className={styles.password}>
          Вспомнили пароль?
          <NavLink to='/login' >Войти</NavLink>
        </div>
      </div>
    </>);
  };

 