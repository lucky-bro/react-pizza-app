import React from 'react'
import styled from 'styled-components'

const StyledGreenBtn = styled.button `
    background-color: #239823;
    color: white;
    padding: 12px;
    border: 1px solid #1b8632;
    border-radius: 2px;
    font-size: 15px;  
    cursor: pointer; 
    
    :disabled {
        background:#ccc;
        border-color: #eee;
    }    
`

const Button = props => (
    <StyledGreenBtn className={props.className} type={props.type} disabled={props.disabled ? props.disabled : ''}>{props.children}</StyledGreenBtn>
)

export default Button
