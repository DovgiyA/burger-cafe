import { AppHeader } from "../../components/Header/AppHeader";
import styles from "./ResetPassword.module.css";
import { Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function ResetPasswordPage() {

  const [form, setValue] = useState({
    passwordFromLetter: "", 
    password: "" 
  });
  const onChange = e => {
    setValue({...form, [e.target.name]: e.target.value});
  }

  const onSubmit = e => {
    setValue({email: "", password: ""});
  }

    return (<>
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />      
      </div>
      <div className={styles.container}>
        <h1 className={styles.entrance}>Восстановление пароля</h1>
        <span className={styles.input}><PasswordInput name={'password'} onChange={onChange} placeholder={'Введите новый пароль'} /></span>
        <span className={styles.input} ><PasswordInput name={'passwordFromLetter'} onChange={onChange} placeholder={'Введите код из письма'} /></span>       
        <span className={styles.input}><Button onSubmit={onSubmit}>Сохранить</Button></span>         
        <div className={styles.password}>
          Вспомнили пароль?
          <NavLink to='/' >Войти</NavLink>
        </div>
      </div>
      </>);
  };

 