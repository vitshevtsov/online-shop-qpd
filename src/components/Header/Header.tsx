import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = ({ children }) => (
    <header className={styles.header}>
        <div className="container-fluid align-items-center">
            {children}
        </div>
    </header>
);

export default Header;
