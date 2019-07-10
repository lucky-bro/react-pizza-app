import React from 'react';

const Ingridient = props => {
    const title = props.title;
    const className = "Ingridient "+title;
    return (
        <div className={className}></div>
    );
};

export default Ingridient;
