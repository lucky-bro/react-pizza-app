import React from 'react'
import IngridientList from './IngridientList'
import styled from 'styled-components'

const StyledIngridients = styled.div `
    width: 50%;
    display: inline-block;
`

const Ingridients = props => {
    return (
        <StyledIngridients>
            <h3>{props.title}</h3>
            
            <IngridientList 
                ingridients={props.ingridients}
                selected={props.selected} 
                ingridientClick={ name => props.ingridientClick(name)} 
            />
        </StyledIngridients>
    )
}

export default Ingridients
