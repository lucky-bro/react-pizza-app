import React from 'react'
import styled from 'styled-components'
import ingridientsMap from '../images/ingridients.png'

const StyledIngridient = styled.div `
    width: 85px;
    height: 85px;
    background: url(${ingridientsMap});
    border-radius: 50%;
    display: inline-block;
    background-size: 255px;
    margin: -4px;
    animation: fadein 1s;

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    &.Mozzarella {
        background-position: 260px -3px;
    }
    &.Cheddar {
        background-position: 170px -5px;
    }
    &.Corn {
        background-position: 85px 0px;  
    }
    &.Cucumber {
        background-position: 256px 173px;
    }
    &.Tomato {
        background-position: 172px 170px;
    }
    &.Sweet.pepper {
        background-position: 87px 168px;
    }
    &.Chicken {
        background-position: 255px 86px;
    }
    &.Beef {
        background-position: 170px 84px;
    }
    &.Fish {
        background-position: 85px 83px;
    }   
`


const Ingridient = props => {
    let className = props.title

    return (
        <StyledIngridient className={className}></StyledIngridient>
    )
}

export default Ingridient