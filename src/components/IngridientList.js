import React from 'react';

const IngridientList = ({ ingridients, ingridientClick,selected }) => {
    return (
        <div className="IngridientList">
                { 
                    ingridients.map(function (data, index) {
                        let activeClass = false
                        if(selected.indexOf(data.name) !== -1) activeClass = true
                        
                        return (    
                            <div key={index}>
                                <button
                                    className={activeClass ? 'active' : ''} 
                                    key={index} 
                                    value={data.name} 
                                    onClick={ e => {
                                        ingridientClick(e.target.value)
                                    }}
                                >
                                    {data.name} ,  ${data.price} 
                                </button><br />
                            </div>
                        );
                    })
                }
        </div>
    );
};

export default IngridientList;