import styles from "./ResetPassword.module.css";
import { Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RESET } from "../../constants/constants";
import { isSuccess, reset } from "../../store/entities/services/user/actions";
import { useForm } from "../../hooks/useForm";
import { useEffect } from 'react';


export default function ResetPasswordPage() {

  const dispatch = useDispatch<any>(); 
  const navigate = useNavigate()
  const success = useSelector((store: any) => store.user.success); 
  useEffect(() => {
    if (success) {
      navigate("/reset-password");
      dispatch(isSuccess(false))
    }
  }, [success]); 

  const {values, handleChange, setValues} = useForm({password: "", token: "", email: '', name: ''});

  const sendForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(reset(RESET, values))
    setValues({password: "", token: "", email: '', name: ''});
    
  }

    return (<>     
      <div className={styles.container}>
        <h1 className={styles.entrance}>Восстановление пароля</h1>
        <form className={styles.form} onSubmit={sendForm}> 
          <span className={styles.input}><PasswordInput name={'password'} value={values.password} onChange={handleChange} placeholder={'Введите новый пароль'} /></span>
          <span className={styles.input} ><PasswordInput name={'token'} value={values.token} onChange={handleChange} placeholder={'Введите код из письма'} /></span>       
          <span className={styles.input}><Button htmlType="submit">Сохранить</Button></span>         
        </form>
        <div className={styles.password}>
          Вспомнили пароль?
          <NavLink to='/login' >Войти</NavLink>
        </div>
      </div>
      </>);
  };

 