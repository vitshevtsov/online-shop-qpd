import React from 'react';

const Header: React.FC = ({ children }) => (
    
    <header className="header">
        <div className="container">
            {children}
        </div>
    </header>
);

export default Header;
