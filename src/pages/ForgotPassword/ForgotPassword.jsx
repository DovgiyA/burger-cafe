import { useDispatch, useSelector } from "react-redux";
import { AppHeader } from "../../components/Header/AppHeader";
import styles from "./ForgotPassword.module.css";
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from "react-router-dom";
import { CHECK } from "../../constants/constants";
import { isSuccess, reset } from "../../store/entities/services/user/actions";
import { useForm } from "../../hooks/useForm";
import { useEffect } from 'react';


export default function ForgotPasswordPage() {

  const {values, handleChange, setValues} = useForm({email: ""});

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const success = useSelector(store => store.user.success); 
  useEffect(() => {
    if (success) {
      navigate("/reset-password");
      dispatch(isSuccess(false))
    }
  }, [success]);
  

  const sendForm = e => {
    e.preventDefault();
    dispatch(reset(CHECK, values));
    setValues({email: ""});    
  } 

    return (<>
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />      
      </div>
      <div className={styles.container}>
        <h1 className={styles.entrance}>Восстановление пароля</h1>    
        <form className={styles.form} onSubmit={sendForm}>
          <span className={styles.input}><EmailInput name="email" onChange={handleChange} value={values.email} placeholder={'Укажите e-mail'}/></span> 
          <span className={styles.input}><Button htmlType="submit" >Восстановить</Button></span>
        </form>                
        <div className={styles.password}>
          Вспомнили пароль?
          <NavLink to='/login' >Войти</NavLink>
        </div>
      </div>
    </>);
  };

 