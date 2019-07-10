import React from 'react';
import  PizzaPreview from './PizzaPreview';
import  Ingridients from './Ingridients';
import  TotalPrice from './TotalPrice';
import  OrderButton from './OrderButton';

const Index = ({SelectedIngridients,PizzaIngridients,ingridientClick,Total}) => {
    return(
        <div>
            <PizzaPreview 
                title='You choose:' 
                ingridients={SelectedIngridients}
            />
            <Ingridients 
                ingridients={PizzaIngridients}
                selected={SelectedIngridients} 
                title='Select ingridients:' 
                ingridientClick={ name => ingridientClick(name)} 
            />
            <TotalPrice 
                Total={Total} 
            />
            { Total > 0 ? <OrderButton /> : null } 
        </div>
    )
}

export default Index;
