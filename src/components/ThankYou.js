import React from 'react';
import { Link } from "react-router-dom";

const ThankYou = ({makeNewPizza, userName}) => (
    <div className="Thank-you">
        <h3>Thank you {userName}! </h3>
        <p>Your pizza will be ready in 10 min.</p>
        <p><Link to="/" onClick={ () => {return makeNewPizza()}}>Make new one</Link></p>
    </div>
);

export default ThankYou
