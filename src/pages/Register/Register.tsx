
import { AppHeader } from "../../components/Header/AppHeader";
import styles from "./Register.module.css";
import { Button, EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { REGISTRATION } from "../../constants/constants";
import { loginRequest } from "../../store/entities/services/user/actions";
import { useForm } from "../../hooks/useForm";


export default function RegisterPage() {

  const {values, handleChange, setValues} = useForm({email: "", password: "", name: "", token: ''});
 
  const dispatch = useDispatch<any>();

  const sendForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(loginRequest(REGISTRATION, values));
    setValues({
      email: "", 
      password: "", 
      name: "" ,
      token: ''
    });
  } 

    return (<>
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />      
      </div>
      <div className={styles.container}>
        <h1 className={styles.entrance}>Регистрация</h1>
        <form className={styles.form} onSubmit={sendForm}>
          <span className={styles.input} ><Input name={'name'} value={values.name} placeholder={'Имя'} onChange={handleChange} /></span>
          <span className={styles.input}><EmailInput name={'email'} value={values.email} onChange={handleChange} /></span>
          <span className={styles.input}><PasswordInput name={'password'} value={values.password} onChange={handleChange}/></span>
          <span className={styles.input}><Button htmlType="submit" >Зарегистрироваться</Button></span> 
        </form>        
        <div className={styles.password}>
          Уже зарегистрированы?
          <NavLink to='/login' >Войти</NavLink>
        </div>
      </div>
      </>);
  };

 