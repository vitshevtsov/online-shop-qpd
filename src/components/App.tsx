import React from 'react';
import Header from './Header/Header';
import '../styles.css';
import Main from '../routes/Main';
import SideMenu from './SideMenu/SideMenu';

const App: React.FC = () => {
    // const { openedItemId } = useContext(DataContext);
    // const appClassNames = (openedItemId !== null) // при открытом модальном окне openedItemId = 0 (для новых задач) или = id (редактирование / удаление)
    //   ? ['app', 'appWithOpenModal'].join(' ')
    //   : 'app';
    const appClassNames = 'needToReplace';

    return (
        <div className={appClassNames}>
            <Header>
            </Header>
            <SideMenu></SideMenu>
            <Main />
        
        </div>
    );
};

export default App;
