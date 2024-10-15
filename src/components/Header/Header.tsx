import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">Super soft company</h1>
            <img src="/src/assets/title.png" alt="Title" className="header-image" />
        </header>
    );
};

export default Header;