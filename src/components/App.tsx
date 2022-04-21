import React from 'react';
import Header from './Header/Header';
import '../styles.css';
import SideMenu from './SideMenu/SideMenu';
import RoutesComponent from '../routes/Routes';
import {setupStore} from '../store/store';
import { Provider } from 'react-redux';
import Cart from './modal/Cart/Cart';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { categoriesSlice } from '../store/categoriesSlice';

const App: React.FC = () => {
    const store = setupStore();
    const {categories} = useAppSelector(state => state.categoriesReducer);

    const {addCategories} = categoriesSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <Provider store={store}>
            <div>{categories ? categories.map((item) => <div key={item.id}>{item.name}</div>) : 'категорий пока нет'}</div>
            <button onClick={() => dispatch(addCategories([{id: 123, name: 'name',}])) }>add categories</button>
            <div>
                <Header>
                </Header>
                <SideMenu />
                <Cart />
                <RoutesComponent />
            </div>
        </Provider>
        
    );
};

export default App;
