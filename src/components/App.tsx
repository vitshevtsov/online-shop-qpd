import React from 'react';
import Header from './Header/Header';
import '../styles.css';
import SideMenu from './SideMenu/SideMenu';
import RoutesComponent from '../routes/Routes';
import {setupStore} from '../store/store';
import { Provider } from 'react-redux';
import Cart from './Cart/Cart';
import OrderForm from './OrderForm.ts/OrderForm';

const App: React.FC = () => {
    const store = setupStore();

    return (
        <Provider store={store}>
            <Header />
            <SideMenu />
            <Cart />
            <OrderForm />
            <RoutesComponent />
        </Provider>
        
    );
};

export default App;
