import React from 'react'
import styled, { keyframes } from 'styled-components'

const throb = keyframes`
    0% {
        opacity: 0;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.5);
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
`

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Dot = styled.div`
    background-color: ${ props => props.color || '#333' };
    margin: 0.5rem;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    animation: ${ throb } 1000ms ease-out infinite;
    &:nth-child(1) { animation-delay: 0ms; }
    &:nth-child(2) { animation-delay: 250ms; }
    &:nth-child(3) { animation-delay: 500ms; }
`

export const Dots = ({ color }) => (
    <Wrapper>
        <Dot color={ color }/>
        <Dot color={ color }/>
        <Dot color={ color }/>
    </Wrapper>
)