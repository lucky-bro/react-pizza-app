import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import  Button from './Button'

const StyledInput = styled.input `
    padding: 10px;
    margin:0 5px 20px 0;
    width: 400px;
    text-align: center;
    font-size: 14px;
`

const StyledButton = styled(Button) `
    margin-bottom:10px;
`


const OrderConfirm = ({total, confirmOrder, userName, address, setUserName, setAddress}) => {
    let disabled = true
    if(userName !== '' && address !== '' && userName.length > 2 && address.length > 3) disabled = false
    return (
        <div className="Order">
            <h3>Enter some details to complete the order.</h3>
            <StyledInput type="text" className="User-name" value={userName} placeholder="Enter your name" required onChange={e => setUserName(e.target.value)}/>
            <StyledInput type="text" className="User-address" value={address} placeholder="Address" required onChange={e => setAddress(e.target.value)}/>
            <p className="Amount">Total amount: ${total}</p>
            <Link to="/thanks" onClick={ () => confirmOrder()}>
                <StyledButton type="submit" disabled={disabled} title="Confirm order"/>
            </Link>
            <br/>
            <Link to="/">Back</Link>
        </div>
    )
}

export default OrderConfirm
