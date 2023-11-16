import { AppHeader } from "../../components/Header/AppHeader";
import styles from "./Profile.module.css";
import { NavLink } from "react-router-dom";
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from "react-redux";
import { logout, refreshUser } from "../../store/entities/services/user/actions";
import { useForm } from "../../hooks/useForm";


export default function ProfilePage() {
  const dispatch = useDispatch<any>();
  
  const user = useSelector((store: any) => store.user.user); 

  const {values, handleChange, setValues} = useForm({
    email: user.email, 
    name: user.name,
    password: '',
    token: '' 
  });

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
        <form className={styles.input} onSubmit={() => dispatch(refreshUser(values))}>
          <div className={styles.item}><Input name="name" type={'text'} value={values.name} onChange={handleChange} placeholder={'Имя'} icon={'EditIcon'}/></div>
          <div className={styles.item}><EmailInput name="email" value={values.email} onChange={handleChange} isIcon={true} placeholder={'Логин'} /></div>
          <div className={styles.item}><PasswordInput name="password" onChange={handleChange} value={values.password}/></div>  
          <div className={styles.button}>
           {(user.email === values.email) && (user.name === values.name) ? null 
            : (<>
            <Button type='primary' htmlType='submit' >Сохранить</Button>
            <Button type='primary' htmlType='reset' onClick={() => setValues({email: user.email, name: user.name, password: '', token: ''})}>Отменить</Button>
            </>)}            
          </div>     
        </form>
        </div>
    </>);
  };

 