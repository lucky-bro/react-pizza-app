import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import bg from '../images/pizza_bg.jpg'

const AppHeader = styled.div `
    background: #222 url(${bg});
    height: 150px;
    padding: 55px 20px;
    color: white;
    background-size: cover;
`

const AppLogo = styled.img `
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
    @keyframes App-logo-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    } 
`

const Header = ({title}) => (
    <AppHeader>
        <AppLogo src={logo} alt="React logo" />
        <h2>{title}</h2>
    </AppHeader>
)

export default Header
