import React from 'react';
import Header from './Header';
import '../styles.css';

const App: React.FC = () => {
  // const { openedItemId } = useContext(DataContext);
  // const appClassNames = (openedItemId !== null) // при открытом модальном окне openedItemId = 0 (для новых задач) или = id (редактирование / удаление)
  //   ? ['app', 'appWithOpenModal'].join(' ')
  //   : 'app';
  const appClassNames = 'needToReplace'

  return (
      <div className={appClassNames}>
        <Header>
        </Header>
        
      </div>
  );
};

export default App;
