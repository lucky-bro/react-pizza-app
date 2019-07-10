import React from 'react';

const TotalPrice = ({total}) => {
    return (
        <div className="total-price">
            <h3>Total price: ${total}</h3>
        </div>
    );
};

export default TotalPrice