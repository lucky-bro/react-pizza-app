import React from 'react';
import IngridientList from './IngridientList';

const Ingridients = props => {

    return (
        <div className="Ingridients">
            <h3>{props.title}</h3>
            
            <IngridientList 
                ingridients={props.ingridients}
                selected={props.selected} 
                ingridientClick={ name => props.ingridientClick(name)} 
            />
        </div>
    );
};

export default Ingridients;
