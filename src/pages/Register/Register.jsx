import { useState } from "react";
import { AppHeader } from "../../components/Header/AppHeader";
import styles from "./Register.module.css";
import { Button, EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { REGISTRATION } from "../../constants/constants";
import { registerRequest } from "../../store/entities/services/register/actions";


export default function RegisterPage() {

  const [form, setForm] = useState({
    email: "", 
    password: "", 
    name: "" 
  });


  const onChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  }
 
  const dispatch = useDispatch();

  const onClick = e => {
    dispatch(registerRequest(REGISTRATION, form));
    setForm({
      email: "", 
      password: "", 
      name: "" 
    });
  } 

    return (<>
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />      
      </div>
      <div className={styles.container}>
        <h1 className={styles.entrance}>Регистрация</h1>
        <span className={styles.input} ><Input name={'name'} value={form.name} placeholder={'Имя'} onChange={onChange} /></span>
        <span className={styles.input}><EmailInput name={'email'} value={form.email} onChange={onChange} /></span>
        <span className={styles.input}><PasswordInput name={'password'} value={form.password} onChange={onChange}/></span>
        <span className={styles.input}><Button onClick={onClick}>Зарегистрироваться</Button></span>         
        <div className={styles.password}>
          Уже зарегистрированы?
          <NavLink to='/login' >Войти</NavLink>
        </div>
      </div>
      </>);
  };

 