import { AppHeader } from "../../components/Header/AppHeader";
import styles from "./Profile.module.css";
import { NavLink } from "react-router-dom";
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from "react-redux";
import { logout, refreshUser } from "../../store/entities/services/user/actions";
import { useState } from "react";


export default function ProfilePage() {
  const dispatch = useDispatch();
  
  const user = useSelector(store => store.user.user); 

  const [form, setForm] = useState({
    email: user.email, 
    name: user.name,
    password: '' 
  });


  const onChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  }

    return (<>
      <div className={styles.wrapper}>
        <AppHeader  className={styles.header} />         
        <nav className={styles.text}>
          <NavLink to='/profile'  className={({ isActive, isPending }) =>
    isPending ? styles.pending : isActive ? styles.active : styles.pending }><p>Профиль</p></NavLink>
          <NavLink to='/profile/orders' className={({ isActive, isPending }) =>
    isPending ? styles.pending : isActive ? styles.active : styles.pending } ><p className={styles.char}>История заказов</p></NavLink>
          <NavLink to='/' onClick={() => dispatch(logout())} className={({ isActive, isPending }) =>
    isPending ? styles.pending : isActive ? styles.active : styles.pending } ><p className={styles.char}>Выход</p></NavLink> 
          <p className={styles.p1}>В этом разделе вы можете</p> 
          <p className={styles.p2}>изменить свои персональные данные</p>      
        </nav>
        <div className={styles.input}>
          <div className={styles.item}><Input name="name" type={'text'} value={form.name} onChange={onChange} placeholder={'Имя'} icon={'EditIcon'}/></div>
          <div className={styles.item}><EmailInput name="email" value={form.email} onChange={onChange} icon={'EditIcon'} placeholder={'Логин'} /></div>
          <div className={styles.item}><PasswordInput onChange={onChange} value={''}/></div>  
          <div className={styles.button}>
           {(user.email === form.email) && (user.name === form.name) ? null 
            : (<>
            <Button type='primary' htmlType='submit' onClick={() => dispatch(refreshUser(form))}>Сохранить</Button>
            <Button type='primary' htmlType='reset' onClick={() => setForm({email: user.email, name: user.name})}>Отменить</Button>
            </>)}
            
          </div>     
        </div>
        </div>
    </>);
  };

 