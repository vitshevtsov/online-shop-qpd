import React from 'react';
import Header from './Header/Header';
import 'styles.css';
import SideMenu from './SideMenu/SideMenu';
import RoutesComponent from './Routes/Routes';
import {setupStore} from 'store/store';
import { Provider } from 'react-redux';
import Cart from './Cart/Cart';
import OrderForm from './OrderForm.ts/OrderForm';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';

const App: React.FC = () => {
    
    const store = setupStore();

    return (
        <Provider store={store}>
            <Header>
                <HeaderNavbar/>
            </Header>
            <SideMenu />
            <Cart />
            <OrderForm />
            <RoutesComponent />
        </Provider>
    );
};

export default App;
