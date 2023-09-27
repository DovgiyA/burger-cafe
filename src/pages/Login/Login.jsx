import { NavLink } from "react-router-dom";
import { AppHeader } from "../../components/Header/AppHeader";
import styles from "./Login.module.css";
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AUTHORIZATION } from "../../constants/constants";
import { loginRequest } from "../../store/entities/services/user/actions";


export default function LoginPage() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "", 
    password: "" 
  });


  const onChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const onClick = e => {
    dispatch(loginRequest(AUTHORIZATION, form));
    setForm({email: "", password: ""});
  } 

    return ( <>
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />        
      </div>
      <div className={styles.container}>
        <h1 className={styles.entrance}>Вход</h1>
        <span className={styles.input}><EmailInput name={'email'} value={form.email} onChange={onChange} /></span>
        <span className={styles.input}><PasswordInput name={'password'} value={form.password} onChange={onChange} /></span>
        <span className={styles.input}><Button htmlType='submit' onClick={onClick}>Войти</Button></span>        
        <div className={styles.register}>
          Вы новыйй пользователь?
          <NavLink to='/register' >Зарегистрироваться</NavLink>
        </div>
        <div className={styles.password}>
          Забыли пароль?
          <NavLink to='/forgot-password' >Восстановить пароль</NavLink>
        </div>
      </div>
      </>);
  };

 