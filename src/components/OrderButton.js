import React from 'react';
import { Link } from "react-router-dom";

const OrderButton = () => (
    <div className="Order-button">
        <Link to="/order"><button className="Green-btn">Make order</button></Link>
    </div>
);

export default OrderButton
