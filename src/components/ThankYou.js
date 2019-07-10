import React from 'react';
import { Link } from "react-router-dom";

const ThankYou = ({MakeNewPizza, UserName}) => (
    <div className="Thank-you">
        <h3>Thank you {UserName}! </h3>
        <p>Your pizza will be ready in 10 min.</p>
        <p><Link to="/" onClick={ () => {return MakeNewPizza()}}>Make new one</Link></p>
    </div>
);

export default ThankYou;
