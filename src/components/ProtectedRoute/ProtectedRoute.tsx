import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

export interface ProtectedRouteI {
    unAuth?: boolean;
    element: JSX.Element;
}


export const Protected = ({unAuth = false, element}: ProtectedRouteI): JSX.Element => {
    
    const isChecked = useSelector((store: any) => store.user.isChecked);
    const user = useSelector((store: any) => store.user.user);
    const location = useLocation();

    if (!isChecked) {
        return (<></>);
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