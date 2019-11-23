import React from 'react'
import PropTypes from 'prop-types'
import Ingridient from './Ingridient'
import styled from 'styled-components'
import bg from '../images/pizza_preview.jpg'

const StyledPizzaPreview = styled.div `
    background-image: url(${bg});
    height: 440px;
    background-size: 385px;
    width: 50%;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center 40px;
    display: inline-block;
    vertical-align: top;
`

const IngridientsIcons = styled.div `
    width: 260px;
    height: 260px;
    margin: 64px auto;    
`

const PizzaPreview = ({title, ingridients}) => {

    const ingridientsItems = ingridients.map(item => { 
        return ( <Ingridient key={item} title={item} /> ) 
    });

    return (
        <StyledPizzaPreview>
            <h3>{title}</h3>
            <IngridientsIcons>
                {ingridientsItems}
            </IngridientsIcons>
        </StyledPizzaPreview>
    )
}

PizzaPreview.propTypes = {
    title: PropTypes.string.isRequired
}

export default PizzaPreview