import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Footnote = styled.span`
    display: inline-block;
    color: var(--color-black);
    margin-bottom: 1rem;
    opacity: 0.25;
    transition: opacity 250ms;
    &:hover {
        opacity: 1.0;
    }
`

Footnote.propTypes = {
    children: PropTypes.node.isRequired,
}
