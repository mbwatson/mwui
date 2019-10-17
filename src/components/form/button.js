import styled from 'styled-components'

export const Button = styled.button`
    padding: 0.75rem 1rem;
    background-color: ${ ({ color }) => color ? color : '#eee' };
    outline: none;
    border: 0;
    border-radius: 0.5rem;
    text-transform: uppercase;
    color: #000;
    font-weight: bold;
    transition: filter 250ms;
    &:focus {
        outline: 2px solid green;
        filter: brightness(1.1);
    }
    &:hover {
        filter: brightness(1.1);
    }
`
