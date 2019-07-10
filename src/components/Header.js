import React from 'react';

const Header = ({logo, title}) => {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{title}</h2>
        </div>
    );
};

export default Header;
