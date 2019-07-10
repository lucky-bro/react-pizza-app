import React from 'react';

const Ingridient = props => {
    let title = props.title
    let className = "Ingridient "+title

    return (
        <div className={className}></div>
    );
};

export default Ingridient