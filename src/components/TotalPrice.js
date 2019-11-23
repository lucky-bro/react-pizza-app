import React from 'react'
import styled from 'styled-components'

const StyledTotalPrice = styled.div `
    display: inline-block;
`

const TotalPrice = ({total}) => {
    return (
        <StyledTotalPrice>
            <h3>Total price: ${total}</h3>
        </StyledTotalPrice>
    );
};

export default TotalPrice