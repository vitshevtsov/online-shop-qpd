import React from 'react';
import Header from './Header/Header';
import '../styles.css';
// import Main from '../routes/Main';
import SideMenu from './SideMenu/SideMenu';
import RoutesComponent from '../routes/Routes';

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
            <SideMenu />
            <RoutesComponent />
        </div>
    );
};

export default App;
