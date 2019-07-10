import React from 'react';
import { Link } from "react-router-dom";

const OrderConfirm = ({total, confirmOrder, userName, address, setUserName, setAddress}) => {
    let disabled = true
    if(userName !== '' && address !== '' && userName.length > 2 && address.length > 3) disabled = false
    return (
        <div className="Order">
            <h3>Enter some details to complete the order.</h3>
            <input type="text" className="User-name" value={userName} placeholder="Enter your name" required onChange={e => setUserName(e.target.value)}/>
            <input type="text" className="User-address" value={address} placeholder="Address" required onChange={e => setAddress(e.target.value)}/>
            <p className="Amount">Total amount: ${total}</p>
            <Link to="/thanks" onClick={ () => confirmOrder()}><button type="submit" disabled={disabled} className="Confirm-order Green-btn">Confirm order</button></Link><br/>
            <Link to="/">Back</Link>
        </div>
    )
};

export default OrderConfirm
