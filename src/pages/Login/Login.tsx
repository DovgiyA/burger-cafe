import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from "react-redux";
import { AUTHORIZATION } from "../../constants/constants";
import { loginRequest } from "../../store/entities/services/user/actions";
import { useForm } from "../../hooks/useForm";


export default function LoginPage() {
  const dispatch = useDispatch<any>();

  const {values, handleChange, setValues} = useForm({email: "", password: "", name: '', token: ''});

  const sendForm = (event: React.FormEvent<HTMLFormElement>): void => {    
    event.preventDefault();
    dispatch(loginRequest(AUTHORIZATION, values));
    setValues({email: "", password: "", name: '', token: ''});
  } 

    return ( <>      
      <div className={styles.container}>
        <h1 className={styles.entrance}>Вход</h1>
        <form className={styles.form} onSubmit={sendForm}>
          <span className={styles.input}><EmailInput name={'email'} value={values?.email} onChange={handleChange} /></span>
          <span className={styles.input}><PasswordInput name={'password'} value={values?.password} onChange={handleChange} /></span>
          <span className={styles.input}><Button htmlType='submit' >Войти</Button></span>  
        </form>      
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

 