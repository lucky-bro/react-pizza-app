import React from 'react';
import  PizzaPreview from './PizzaPreview';
import  Ingridients from './Ingridients';
import  TotalPrice from './TotalPrice';
import  OrderButton from './OrderButton';

const Index = ({selectedIngridients,pizzaIngridients,ingridientClick,total}) => {
    return(
        <div>
            <PizzaPreview 
                title='You choose:' 
                ingridients={selectedIngridients}
            />
            <Ingridients 
                ingridients={pizzaIngridients}
                selected={selectedIngridients} 
                title='Select ingridients:' 
                ingridientClick={ name => ingridientClick(name)} 
            />
            <TotalPrice 
                total={total} 
            />
            { total > 0 ? <OrderButton /> : null } 
        </div>
    )
}

export default Index
