import React from 'react';
import logo from '../images/logo.svg';

const Header = ({title}) => (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
    </div>
);

export default Header
