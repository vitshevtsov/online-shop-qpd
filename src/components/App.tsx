import React from 'react';
import Header from './Header/Header';
import '../styles.css';
import SideMenu from './SideMenu/SideMenu';
import RoutesComponent from '../routes/Routes';
import {store} from '../store/store';
import { Provider } from 'react-redux';
import Cart from './modal/Cart/Cart';

const App: React.FC = () => {
    // const { openedItemId } = useContext(DataContext);
    // const appClassNames = (openedItemId !== null) // при открытом модальном окне openedItemId = 0 (для новых задач) или = id (редактирование / удаление)
    //   ? ['app', 'appWithOpenModal'].join(' ')
    //   : 'app';
    const appClassNames = 'needToReplace';

    return (
        <Provider store={store}>
            <div className={appClassNames}>
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
