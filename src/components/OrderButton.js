import React from 'react'
import  Button from './Button'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const OrderButtonWrap = styled.div `
    display: inline-block;
    margin:0 20px;    
`

const OrderButton = () => (
    <OrderButtonWrap>
        <Link to="/order"><Button>Make order</Button></Link>
    </OrderButtonWrap>
)

export default OrderButton
