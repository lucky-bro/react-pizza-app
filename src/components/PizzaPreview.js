import React from 'react';
import PropTypes from 'prop-types';
import Ingridient from './Ingridient';

const PizzaPreview = ({title, ingridients}) => {

    const ingridientsItems = ingridients.map(item => { 
        return ( <Ingridient key={item} title={item} /> ) 
    });

    return (
        <div className="Pizza-preview">
            <h3>{title}</h3>
            <div className="Ingridients-icons">
                {ingridientsItems}
            </div>
        </div>
    )
}

PizzaPreview.propTypes = {
    title: PropTypes.string.isRequired
}

export default PizzaPreview