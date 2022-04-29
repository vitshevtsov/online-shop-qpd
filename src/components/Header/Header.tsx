import React from 'react';

const Header: React.FC = ({ children }) => (
    <header className="header">
        <div className="container-fluid align-items-center">
            {children}
        </div>
    </header>
);

export default Header;
