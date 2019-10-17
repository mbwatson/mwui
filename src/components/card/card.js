import styled from 'styled-components'

export const CardHeader = styled.div`
    padding: 0.5rem 1rem;
    color: #fff;
    font-weight: bold;
    background-color: #f99;
`

export const CardBody = styled.div`
    flex: 1;
    padding: 1rem;
    background-color: #fff;
`

export const CardFooter = styled.div`
    padding: 1rem;
    color: #222;
    font-size: 80%;
    border-top: 1px solid #eee;
    background-color: #fff;
    text-align: inherit;
    ${ props => props.left && 'text-align: left;' }
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

export const Card = styled.div`
    overflow: hidden;
    margin: 0 auto 1rem auto;
    display: flex;
    flex-direction: column;
    border: 1px solid #f99;
    border-radius: 4px;
    transition: filter 250ms;
    filter: drop-shadow(0 0 3px #00000011);
    &:hover {
        filter: drop-shadow(0 0 5px #00000022);
    }
`
