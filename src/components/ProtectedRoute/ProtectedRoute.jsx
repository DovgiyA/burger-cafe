import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


export const Protected = ({unAuth = false, element}) => {
    
    const isChecked = useSelector((store) => store.user.isChecked);
    const user = useSelector(store => store.user.user);
    const location = useLocation();

    if (!isChecked) {
        return null;
    }

    if (unAuth && user) {        
        const { from } = location.state || { from: {pathname: '/'}};
        return <Navigate to={from} />;
    }

    if (!unAuth && !user) {        
        return <Navigate to='/login' state={{from: location.pathname === '/orders/ordersDetail' ? {pathname: '/'} : location }} />;
    }

    return element;
}

Protected.propTypes = {  
    unAuth: PropTypes.string,
    element: PropTypes.element.isRequired
  };