import React from 'react';

const TotalPrice = ({Total}) => {
    return (
        <div className="total-price">
            <h3>Total price: ${Total}</h3>
        </div>
    );
};

export default TotalPrice;
