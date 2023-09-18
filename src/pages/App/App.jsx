import { useEffect } from 'react';
import { HomePage } from '../Home/Home';
import WebFont from 'webfontloader';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../../store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../Login/Login';
import { ProfilePage } from '../Profile/Profile';
import { RegisterPage } from '../Register/Register';
import { ForgotPasswordPage } from '../ForgotPassword/ForgotPassword';
import { ResetPasswordPage } from '../ResetPassword/ResetPassword';
import { NotFoundPage } from '../404/404';
import { getIngredients } from '../../store/entities/services/ingredients/actions';


function App() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['JetBrains Mono']
      }
    });
   }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />  
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />      
        </Routes>
      </BrowserRouter>
    </Provider>
  );
 
}

export default App;
