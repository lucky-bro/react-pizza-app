import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button `
    display: inline-block;
    padding: 5px 10px;
    width: 200px;
    cursor: pointer;
    margin:0 5px 10px 0;

    &.active {
        background-color: #de7b00;
        color: #ffffff;
        padding: 6px;
        border: 1px solid #a24e25;
        border-radius: 2px;
        font-size: 13px;
        text-shadow: 1px 1px #ad3410;        
    }
`

const IngridientList = ({ ingridients, ingridientClick, selected }) => {
    return (
        <div className="IngridientList">
                { 
                    ingridients.map(function (data, index) {
                        let activeClass = false
                        if(selected.indexOf(data.name) !== -1) activeClass = true
                        
                        return (    
                            <div key={index}>
                                <StyledButton
                                    className={activeClass ? 'active' : ''} 
                                    key={index} 
                                    value={data.name} 
                                    onClick={ e => {
                                        ingridientClick(e.target.value)
                                    }}
                                >
                                    {data.name} ,  ${data.price} 
                                </StyledButton><br />
                            </div>
                        );
                    })
                }
        </div>
    )
}

export default IngridientList